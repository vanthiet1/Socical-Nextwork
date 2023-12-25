import Navigation from "../../layout/Navigation";
const Watch = () => {
      const TitleVideo = 'Video | Facebook';
      document.title= `${TitleVideo}`;
    return (
        <>
          <div className="container">
          <Navigation></Navigation>
          <h1>Watch</h1>
          </div>  
        </>
    );
};

export default Watch;