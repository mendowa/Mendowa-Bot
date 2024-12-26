# **Mendowa Discord Bot**

## **Overview**
**Mendowa Discord Bot** is an advanced project designed to explore and deepen the understanding of **JavaScript** and **Node.js** while developing a feature-rich, interactive bot for Discord servers. This bot serves as both an educational tool and a highly customizable bot that can evolve with new features and functionalities.

The primary goal of this project is to showcase the potential of **discord.js**, **Node.js**, and **API integrations**, while also making the bot increasingly sophisticated and scalable. The bot can respond dynamically to user inputs, leverage external APIs for enhanced interactions, and handle complex logic that simulates human-like communication.

**Mendowa** serves as a fun, engaging assistant on Discord, responding with thoughtful, contextual, and humorous replies powered by **OpenAI's GPT models** (optional integration for more advanced behavior). By enabling you to explore key concepts in programming and bot development, this project provides a real-world use case for asynchronous programming, API usage, and real-time communication in JavaScript.

## **Installation**

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/Mendowa-Bot.git
   cd Mendowa-Bot
   ```
2. **Install dependencies**:
   ```sh
   TOKEN=your_discord_bot_token
   ```
3. **Set up environment variables**: Create `.env` file in the root directory and add your Discord bot token:
   ```.env
   TOKEN=your_discord_bot_token
   ```
## **Usage**
1. **Run the bot**:
   ```sh
   node index.js
   ```
2. **Interact with the bot**:
   - Send `Hello` in Discord channel to receive a greeting.
   - Send `Apakah aleg gila?` to get humorous response.
   - Use the `/emded` command to receive an embdded message.

## **Features**
- Greeting Message: Responds to `hello` with a personalized greeting.
- Humorous Response: Responds to `Apakah aleg gila?` with a humorous reply.
- Embedded Messages: Sends embedded messages using the `/embed` command.

## **Configuration**
- Environment Variables: Configure your bot token in the `.env` file.
- Intents: Modify the intents in `index.js` to listen to different events.

## **Contributing**
1. Fork the repository.
2. Create a new branch/

```sh
git checkout -b feature/your-feature-name
```

3. **Commit your changes**:
```sh
git commit -m 'Add some feature'
```
4. **Push to the branch**:
```sh
git push origin feature/your-feature-name
```
5. **Open a pull request**