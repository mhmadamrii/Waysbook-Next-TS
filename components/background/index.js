import React from "react";
import Image from "next/image";

// images bg
import Layer1 from "../../public/assets/layer1.png";
import Layer2 from "../../public/assets/layer2.png";

const styles = {
  wrappedContainer: {
    // width: 1200,
    margin: 'auto',
    height: 700,
    // border: '1px solid red'
  },
  container: {
    // border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default function Background() {
  return (
    <>
      <div style={styles.wrappedContainer}>
        <div style={styles.container}>
          <div>
            <Image src={Layer1} width="100%" height={500} />
          </div>
          <div>
            <Image src={Layer2} width="100%" height={500} />
          </div>
        </div>
      </div>
    </>
  );
}
