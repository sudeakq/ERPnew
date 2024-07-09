function ReadMore() {
  return (
    <div className="NewsPage">
      <h1>What's New</h1>
      <div className="NewsList">
        <div className="left-News">
          <div className="Newsdate">
            <p className="darker">20 august 2021</p>
            <p className="darker p2">posted by Antonio Gallo</p>
          </div>
          <div className="news-content">
            <p className="darker">Project Management Presentation</p>
            <p className="desc">
              On monday 23 August there will be a presentation from project
              management regarding the theater platform. Please prepare the
              necessary documents.
            </p>
          </div>
        </div>
        <p className="cizgi darker">Read More</p>
      </div>
      <div className="NewsList">
        <div className="left-News">
          <div className="Newsdate">
            <p className="darker">16 august 2021</p>
            <p className="darker p2">posted by Zeynep</p>
          </div>
          <div className="news-content">
            <p className="darker">HR Meeting</p>
            <p className="desc">
              Weekly progress will be held at the end of this week. All HR
              should be in the afternoon shift at 5PM. Thank you.
            </p>
          </div>
        </div>
        <p className="cizgi darker">Read More</p>
      </div>
      <div className="NewsList">
        <div className="left-News">
          <div className="Newsdate">
            <p className="darker">13 august 2021</p>
            <p className="darker p2">posted by Joshua</p>
          </div>
          <div className="news-content">
            <p className="darker">Interns Performance Review</p>
            <p className="desc">
              Daily progress for interns performance. All the interns should be
              interviewed and report updated.
            </p>
          </div>
        </div>
        <p className="cizgi darker">Read More</p>
      </div>
      <> {"< 1/4 >"} </>
    </div>
  );
}
export default ReadMore;
