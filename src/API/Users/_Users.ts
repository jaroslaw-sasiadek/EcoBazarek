import { DeleteUser } from "./DeleteUser";
import { PostLogin } from "./PostLogin";
import { PostPassword } from "./PostPassword";
import { PostUsers } from "./PostUsers";
import { PutUsers } from "./PutUsers";

const handleUsers = {
	DeleteUser,
	PostLogin,
	PostPassword,
	PostUsers,
	PutUsers,
};

export { handleUsers as Users };
