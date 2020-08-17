import { Observable } from "rxjs";

export class ChatMessage {
    $key?: string;
    email?: string;
    username?: string;
    message?: string;
    timeSent?: string;
}