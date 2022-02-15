const MessageCard = ({ message }) => {
    return (
        <article className="my-0 mx-auto p-4 w:full md:max-w-screen-sm lg:max-w-screen-md rounded-md border-2 border-gainsboro">
            <p className="text-xl ">{message}</p>
        </article>
    );
};

export default MessageCard;
