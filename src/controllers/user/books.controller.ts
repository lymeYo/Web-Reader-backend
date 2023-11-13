import Book, { BookModel } from "../../models/book";
import User, { UserModel } from "../../models/user";

export const addBook = async (req, res) => {
  const { bookRef, epubCfi, bookName } = req.body;
  try {
    const user: UserModel | null = await User.findOne({
      where: { username: req?.user?.username },
    });
    console.log(user);
    if (!user) return res.status(403).send("Неверные данные");

    const book: BookModel | null = await Book.create({
      userId: user.id,
      bookRef,
      epubCfi: epubCfi || null,
      bookName,
    });

    if (!book) throw new Error();

    await book.save();
    await user.save();
    return res.json(book);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send("Не поулчается обновить данные в данный момент");
  }
};

export const removeBook = async (req, res) => {
  const { bookId } = req.body;

  try {
    const user: UserModel | null = await User.findOne({
      where: { username: req?.user?.username },
    });
    if (!user) return res.status(403).send("Неверные данные");

    console.log(user.id, bookId, "asdasd");
    const book: BookModel | null = await Book.findOne({
      where: {
        id: bookId,
        userId: user.id,
      },
    });
    if (!book) throw new Error();

    user.openedBookId = null;
    await user.save();
    await book.destroy();

    return res.send("succesfull");
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send("Не поулчается обновить данные в данный момент");
  }
};

export const getBooks = async (req, res) => {
  const reqUser: UserModel | undefined = req?.user ?? undefined;
  try {
    const user: UserModel | null = await User.findOne({
      where: { username: reqUser?.username },
    });
    if (!user) return res.status(403).send("Неверные данные");

    const books: BookModel[] | null = await Book.findAll({
      where: { userId: user.id },
    });
    if (!books) throw new Error();

    return res.json(books);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send("Не поулчается обновить данные в данный момент");
  }
};

export const updateBook = async (req, res) => {
  const { bookId, bookName, epubCfi } = req.body 

  try {
    const user: UserModel | null = await User.findOne({ where: { username: req?.user?.username } })
    const book: BookModel | null = await Book.findOne({ where: { id: bookId, userId: user?.id } })
    if (!user || !book) return res.status(403).send('Неверные данные')

    book.bookName = bookName
    book.epubCfi = epubCfi
    await book.save()
    return res.json(book)
  } catch (e) {
    return res.status(500).send('Не поулчается обновить данные в данный момент')
  }
}

export const openBook = async (req: any, res: any) => {
  const reqUser: UserModel | undefined = req?.user ?? undefined;
  const { bookId } = req.body;

  try {
    const user: UserModel | null = await User.findOne({
      where: { username: reqUser?.username },
    });
    const openedBook = await Book.findOne({ where: { id: bookId } });
    if (!user || !openedBook) return res.status(403).send("Неверные данные");

    user.openedBookId = bookId;
    await user.save();
    return res.json(openedBook);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send("Не поулчается получить данные в данный момент");
  }
};

export const closeBook = async (req: any, res: any) => {
  const reqUser: UserModel | undefined = req?.user ?? undefined;

  try {
    const user: UserModel | null = await User.findOne({
      where: { username: reqUser?.username },
    });
    if (!user) return res.status(403).send("Неверные данные");

    user.openedBookId = null;
    await user.save();
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send("Не поулчается получить данные в данный момент");
  }
}
