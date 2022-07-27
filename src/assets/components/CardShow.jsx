export const CardShow = ({
  img,
  direction = "left",
  buttomText = "Insert text",
  titleText = "Insert text",
  subtitleText = "Insert text",
  positionTitle = 1,
}) => {
  const directions = direction === "left" ? "row" : "row-reverse";

  const styleContain = { display: "flex", flexDirection: directions };

  const style1 = {
    width: "52.5rem",
    backgroundColor: "#000",
    backgroundImage:`url(${img})`,
    backgroundPosition:"center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };

  const style2 = {
    width: "52.5rem",
    backgroundColor: "#12302990",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };
  const styleH2 = {
    fontSize: "3.5rem",
  };

  const styleP = {
    fontSize: "1.2rem",
    textAlign: "center",
  };

  const styleBtn = {
    minWidth: "30%",
    height: "2.5rem",
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: "2rem",
    border: "1px solid #fff",
    fontSize: "1.2rem",
    fontWeight: 600,
    cursor: "pointer",
  };

  return (
    <section style={styleContain}>
      <article style={style1}>
        {/* <img className="home-img-hero" src={img} alt="Terminos y condiciones" /> */}
      </article>
      <article style={style2}>
        {positionTitle ? (
          <>
            <p style={styleP}>{subtitleText}</p>
            <h2 style={styleH2}>{titleText}</h2>
          </>
        ) : (
          <>
            <h2 style={styleH2}>{titleText}</h2>
            <p style={styleP}>{subtitleText}</p>
          </>
        )}
        <button style={styleBtn}>{buttomText}</button>
      </article>
    </section>
  );
};
