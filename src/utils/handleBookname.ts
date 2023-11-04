import { v4 as uuidv4 } from 'uuid';

export const dividerId = '@DIV@' // чтобы можно было по нему отделить название книги от уникального названия файла 

const handleBookname = (name: string) => uuidv4() + dividerId + name

export default handleBookname