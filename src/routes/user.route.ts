import { Router } from "express";
import { getProfile } from "../controllers/user/profile.controller";
import {
  getBooks,
  addBook,
  removeBook,
  openBook,
  updateBook,
  closeBook,
} from "../controllers/user/books.controller";
import passport from "passport";

const router = Router();

router.get(
  "/user/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

router.get(
  "/user/books",
  passport.authenticate("jwt", { session: false }),
  getBooks
);
router.delete(
  "/user/books",
  passport.authenticate("jwt", { session: false }),
  removeBook
);
router.patch(
  "/user/books",
  passport.authenticate("jwt", { session: false }),
  updateBook
);
router.post(
  "/user/books",
  passport.authenticate("jwt", { session: false }),
  addBook
);
router.post(
  "/user/books/close",
  passport.authenticate("jwt", { session: false }),
  closeBook
);
router.post(
  "/user/books/open",
  passport.authenticate("jwt", { session: false }),
  openBook
);
router.post(
  "/user/books/open2",
  passport.authenticate("jwt", { session: false }),
  openBook
);

export default router;
