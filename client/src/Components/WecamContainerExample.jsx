import WebcamCapture from './WebcamCapture'
export default webcamcontainerexample() {
    return (
    <>
        { camera && <WebcamCapture photoProcessor={processPhotos} /> }      
        <button onClick={() => setCamera(!camera)}>toggle camera</button>
        <div>
         {imgSrc.map((item, i) => (
            <img src={item} key={i} alt={i} />
          ))}
        </div>
    </>
    )
}
