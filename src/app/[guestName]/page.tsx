import { convertNameFromLink } from "@/utils/ConvertNameFromLink";
import AppWeddingInvitation from "./app-wedding-inv";

const Page = ({ params }: any) => {
  const guestName = convertNameFromLink(params.guestName);
  return <AppWeddingInvitation guestName={guestName} />;
};
export default Page;
