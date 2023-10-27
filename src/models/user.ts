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

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>
  username: string
  password: string
  bookRef: string | null,
  epubCfi: string | null,
  // books: TbookInfo[]
}

const User = sequelize.define<UserModel>('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookRef: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  epubCfi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // books: {
  //   type: DataTypes.JSON,
  //   allowNull: true
  // }
}, {
  timestamps: false
})

export default User
