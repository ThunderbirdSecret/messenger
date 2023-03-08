import BaseApi from "./BaseApi"

export class ChatsApi extends BaseApi {
  constructor() {
    super("/chats")
  }

  create(title: string) {
    return this.http.post("/", {title})
  }

  delete(id: number): Promise<unknown> {
    //@ts-expect-error
    return this.http.delete("/", { chatId: id });
  }

  reading(): Promise<ChatType[]> {
    return this.http.get('/');
  }

  getUsers(id: number): Promise<Array<UserType & { role: string }>> {
    return this.http.get(`/${id}/users`)
  }
  
  getCommon(id: number): Promise<Array<UserType>> {
    return this.http.get(`/${id}/common`)
  }

  addUsers(users: number[], id: number): Promise<unknown> {
    return this.http.put("/users", { users, chatId: id });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export default new ChatsApi();
