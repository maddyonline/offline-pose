import React from 'react'

import { ExampleComponent } from 'offline-pose'
import 'offline-pose/dist/index.css'
import PubSub from 'pubsub-js'


class Saver {
  constructor() {
    this.frames = [];
  }
}


const SubComponent = () => {
  const [noseY, setNoseY] = React.useState(null);
  console.log("[component] rendered");
  React.useEffect(() => {
    var mySubscriber = function (_msg, data) {
      if (data && data.length > 0) {
        setNoseY(data[0].keypoints[0].y);
      }
    };
    var token = PubSub.subscribe('poses', mySubscriber);
    return () => PubSub.unsubscribe(token);
  }, [])
  return <>
    <div>{JSON.stringify(noseY)}</div>
  </>
}


const App = () => {
  console.log("[top-level] rendered");
  const [clicked, setClicked] = React.useState(0);
  const saver = React.useRef(new Saver());
  console.log(saver.current);


  return <>
    <p>Clicked {clicked} times </p>
    <ExampleComponent handlePoses={(poses) => {
      PubSub.publish('poses', poses);
    }} text="Create React Library Example 😄" />
    <button onClick={() => setClicked(clicked + 1)}>Click</button>
    <SubComponent />
  </>
}

export default App
