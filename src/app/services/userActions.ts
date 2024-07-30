import { userApi } from '../config';
import { User } from '../interfaces/user';
import { UserCreation } from '../interfaces/userCreation';

export const userActions = {

    fetchAllUser: async (): Promise<User[]> => {
        try {
            const { data } = await userApi.get('')

            return data

        } catch (error) {
            throw new Error(error as string)
        }
    },

    createUser: async (user: UserCreation) => {
        try {
            const { data } = await userApi.post('', user)
            return data
        } catch (error) {
            throw new Error(error as string)
        }
    },
    deleteUser: async (userId: string) => {
        try {
            const { data } = await userApi.delete(`/${userId}`)
            return data
        } catch (error) {
            throw new Error(error as string)
        }
    },
    updateUser: async (user: User) => {
        try {
            const { data } = await userApi.put(`/${user.id}`, user)
            return data
        } catch (error) {
            throw new Error(error as string)
        }
    },

}






