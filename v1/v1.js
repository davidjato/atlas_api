import articles from "./components/articles/articles";
import files from "./components/files/files";
import mails from "./components/mails/mails";
import medias from "./components/medias/medias";
import posts from "./components/posts/posts";

export default (app) => {
    articles(app);
    files(app);
    mails(app);
    medias(app);
    posts(app);
};
