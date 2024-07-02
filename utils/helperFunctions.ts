import { Timestamp } from "firebase/firestore";

export function timestampToDate(timestamp: Timestamp): Date {
    return new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
}