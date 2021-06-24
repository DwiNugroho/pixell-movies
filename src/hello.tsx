export default () => {
  return (
    <>
      <div className="row">
        {props.data.map((item, index) => (
          <div key={`partner-${index}`} className="col-3">
            {/* <img src="" alt=""/> */}
          </div>
        ))}
      </div>
    </>
  )
}