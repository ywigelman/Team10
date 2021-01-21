export default function Logo({ mode = "fill", color = "currentColor" }) {
  if (mode === "fill")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 214 344"
        style={{ height: "1.2em", display: "inline-block" }}
      >
        <path
          d="M202.37,211.77c-.12-1.35-.24-2.72-.37-4.09a20.65,20.65,0,0,1-16.95,7.22c-10.42-.38-15.23-6.82-18.26-14-3.27,5.41-7.2,9.81-12.43,11.47-7.61,2.4-16.26-1.54-24.49-6.22a11.06,11.06,0,0,1-1.53,1.78c-18.37,16.58-41,19.58-62.57,21.24L58,229.8l4-6.66c3.68-6.06,8.28-6,10.76-5.93.44,0,.85,0,1.12,0,14.13-1.47,25.88-4.67,35.92-9.78,11.16-5.69,17.73-14.58,19.53-26.41.82-5.36-.48-9-3.86-10.79-3.8-2-9.43-2.52-16.75-1.47l-.24,0-19.19,1.59c-4.26.63-8.62,1.54-12.83,2.42a148.68,148.68,0,0,1-21,3.33c-21.65,1.33-32.56,15.95-41.11,31.55-4.82,8.78-6,17.41-3.67,26.39a202.35,202.35,0,0,0,47.76,87.31,50.07,50.07,0,0,0,7.14,6.48,38.75,38.75,0,0,0,12.2,4.72c11.25.82,21.71,1.14,31.53.93a237.91,237.91,0,0,0,48.13-6.55c21.89-5.41,35-13.62,42-27.87a41.07,41.07,0,0,0,2.21-7.28C207.14,265.31,204.82,239.31,202.37,211.77Z"
          style={{ fill: color }}
        />
        <path
          d="M184.24,203.49a9.86,9.86,0,0,0,9-3.45c2.7-3,3.91-6.9,4.9-11.86,2.28-11.38,3-23,3.66-35,0-1.14-.09-2.29-.13-3.44-.08-2.59-.16-5-.41-7.47C200,130.49,192.73,124,180.71,124h0c-3.23,0-4.27.6-4.6,1-.56.6-.78,2.15-.63,4.27A207.24,207.24,0,0,1,174,173.55c-1,7,.16,14.61,3.67,24A8.85,8.85,0,0,0,184.24,203.49Z"
          style={{ fill: color }}
        />
        <path
          d="M31.3,151c1.35,9,1.62,17.18-.46,24.82A48.8,48.8,0,0,1,55,168.13,142.07,142.07,0,0,0,74.87,165c4.37-.91,8.89-1.85,13.42-2.52l.25,0,19.21-1.59a45.07,45.07,0,0,1,14.55,0,20,20,0,0,1-.42-2.86c-1.1-11.82-1.92-25.8.36-39.85,1.77-11,7.26-16.21,17.14-16.17.12-1.14.35-2.38.59-3.69a407.31,407.31,0,0,0,6.3-51.75c.51-9.76-1-19.21-6.44-27.57-6.07-9.35-15.51-10.33-23.61-2.69-5,4.7-7.38,10.85-9.29,17.2-6.75,22.4-11.53,45.28-16.28,68.15-3,14.23-5.83,28.47-8.74,42.71l-1.43-.21C76.67,119.55,73.07,95,69,70.58c-2.57-15.34-4.09-31-9.51-45.68-3.7-10-12.3-16-20.14-15.23S25.47,17.74,23.63,29.13C22,39.28,22.56,49.47,23.08,59.66,24.66,90.22,26.77,120.78,31.3,151Z"
          style={{ fill: color }}
        />
        <path
          d="M130.13,119.35c-2.13,13.16-1.34,26.5-.28,37.83.21,2.22.35,2.4.85,2.74,13.19,8.92,11.13,21.46,7.36,32.55-.62,1.84-1.13,4.45,0,6.41s3.79,2.85,5.77,3.2c8.91,1.6,13.16-5.22,15.16-11.22,4.7-14.11,5-29.37,5.34-42.85,0-1.59,0-3.19,0-4.79.06-3.49.11-6.8-.08-10.11-.87-14.81-6.48-20.81-21.44-22.93a28.07,28.07,0,0,0-3.93-.32C133.4,109.86,131.25,112.46,130.13,119.35Z"
          style={{ fill: color }}
        />
      </svg>
    );
  if (mode === "line")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 214 344"
        style={{ height: "1.2em", display: "inline-block" }}
      >
        <path
          d="M81.91,147.37c2.91-14.23,5.78-28.48,8.74-42.7,4.75-22.88,9.53-45.76,16.28-68.15,1.91-6.36,4.31-12.5,9.29-17.2,8.1-7.65,17.54-6.67,23.61,2.68,5.43,8.36,6.95,17.82,6.44,27.57a407.31,407.31,0,0,1-6.3,51.75c-1,5.72-2.05,10,6.43,11.16,7.71,1,13.16,7.53,19.51,11.81,5.47,3.69,14.58-1.34,22.05,2.23,8.84,4.22,15.2,9.84,14.74,20.36-1.78,41.11,5,82,3.46,123.08-1.34,35.79-13.91,51.49-48.73,60.09-23.74,5.87-47.93,7.49-72.33,6.52a39.92,39.92,0,0,1-28.65-13A193.14,193.14,0,0,1,8.53,235.29c-3.6-14.86,1.57-28.19,11.39-38.08,12.73-12.82,13.86-26.51,11.38-43.07-4.53-30.25-6.64-60.81-8.22-91.37-.52-10.19-1.09-20.38.55-30.53,1.84-11.38,7.72-18.69,15.69-19.46S55.76,18,59.46,28C64.88,42.72,66.4,58.36,69,73.7c4.1,24.44,7.7,49,11.51,73.46Zm7.8,24.15c-10.66,1.57-21.18,4.76-31.86,5.42-21.45,1.32-32.72,14.89-42,31.82C11,217.64,9.49,226.83,12,236.52a194.36,194.36,0,0,0,46.1,84.26c5.58,6,12.08,11.17,20.63,11.8,31.95,2.32,63.7,1,93.88-10.75,13.73-5.34,24.3-15.17,27.54-30.85,6.33-30.62,1.84-61.12-.56-92-3.89,8.29-9,15-18.73,14.64-11.17-.42-13.79-9.77-16.75-18.89-9.08,19.38-15.69,21.46-34,11-3.55-2-4.06,1-5.57,2.33-15.87,14.33-35.36,17.49-57,19.14,2.93-4.83,6-3.57,8.4-3.82,12.32-1.28,24.26-4,35.33-9.65,11.38-5.8,18.57-15,20.51-27.8.85-5.62-.23-11.26-5.62-14.13C121.38,169.26,115,169,108,170ZM165,154.17c0-4.79.24-9.6,0-14.38-.93-15.81-7.71-23-23.54-25.23-10-1.42-14.73,1.89-16.34,11.83-2,12.22-1.45,24.49-.3,36.76.2,2.14.4,4,2.45,5.38,10.36,7,8.86,16.57,5.51,26.46-2.49,7.32.67,12.65,8.39,14,8.47,1.52,15.26-3.09,18.62-13.16C164.2,182.35,164.64,168.24,165,154.17ZM200.41,159c-.17-3.58-.16-7.18-.54-10.74-1.38-13.14-10-20.69-23.24-20.69-6.18,0-9.24,1.94-8.72,9a190.77,190.77,0,0,1-1.34,41.14c-1.21,8.48.76,16.75,3.69,24.58,3.49,9.35,14.35,11,21.06,3.57,3.33-3.67,4.61-8.32,5.55-13C199.1,181.72,199.82,170.39,200.41,159Z"
          style={{
            fill: "none",
            stroke: color,
            strokeMiterlimit: 10,
            strokeWidth: "8px",
          }}
        />
      </svg>
    );
}