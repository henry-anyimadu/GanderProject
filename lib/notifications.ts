import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function sendSMS(phoneNumber: string, message: string) {
  try {
    const command = new PublishCommand({
      PhoneNumber: phoneNumber,
      Message: message,
    });
    
    const response = await sns.send(command);
    return { success: true, messageId: response.MessageId };
  } catch (error) {
    console.error("SMS sending failed:", error);
    return { success: false, error };
  }
}

export async function sendNotification(type: "SMS" | "EMAIL" | "SYSTEM", recipient: string, message: string) {
  switch (type) {
    case "SMS":
      return sendSMS(recipient, message);
    case "EMAIL":
      // Email implementation would go here
      return { success: true };
    case "SYSTEM":
      // System notification implementation would go here
      return { success: true };
    default:
      return { success: false, error: "Invalid notification type" };
  }
}