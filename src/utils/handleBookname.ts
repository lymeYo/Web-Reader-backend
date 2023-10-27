import { v4 as uuidv4 } from 'uuid';

const handleBookname = (name: string) => uuidv4() + '-' + name

export default handleBookname