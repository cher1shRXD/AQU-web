const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "white",marginBottom:'10px' }}>404 not found {":("}</h1>
      <p style={{ color: "white" }}>요청하신 자료를 찾을 수 없습니다.</p>
    </div>
  );
}

export default NotFound