function TextCalender({ title, text }) {
  return (
    <>
      <section className="text-calender page-container">
        <div className="text-calender__inner">
          <div className="text-calender__text-container">
            <h2 className="text-calender__title">{title}</h2>
            <p className="text-calender__text">{text}</p>
          </div>
          <div className="text-calender__calender-section">
            <iframe
              id="calender-iframe"
              src="https://calendar.google.com/calendar/embed?src=8b942db0d367bf6b4968c557b9d1fa8f962b42b13e991245c093be155a7e0f7e%40group.calendar.google.com&ctz=Europe%2FCopenhagen"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default TextCalender;
