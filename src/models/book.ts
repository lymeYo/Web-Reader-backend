import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import sequelize from '../database/index'

type TbookInfo = {
  ref: string,
  cfi: string
}

export interface BookModel
  extends Model<
    InferAttributes<BookModel>,
    InferCreationAttributes<BookModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>
  userId: number,
  bookRef: string,
  epubCfi: string | null,
  bookName: string
}

const Book = sequelize.define<BookModel>('Books', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookRef: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  epubCfi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bookName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
})

export default Book
