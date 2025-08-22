import databaseClient, { type Result } from "../../../../database/client";

class userRepository {
  async create(body: User) {
    const [user] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [body.email, body.password],
    );

    return user.affectedRows;
  }
}

export default new userRepository();
