import { userApi } from '../config';
import { User } from '../interfaces/user';

export const userActions = {

    fetchAllUser: async (): Promise<User[]> => {
        try {
            const { data } = await userApi.get('')

            return data

        } catch (error) {
            throw new Error(error as string)
        }
    }
}






