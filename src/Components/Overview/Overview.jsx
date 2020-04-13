import React, { memo } from "react";

const Overview = memo(({ expand, setExpand, future, reward }) => {
  return (
    <section>
      <div>
        <h3>Notes</h3>
        <div style={{ color: "#000" }}>
          <p style={{ padding: "0 40px" }}>Apply before: {future}</p>
          <p style={{ padding: "0 40px" }}>Reward: {reward} points</p>
        </div>
      </div>
      <div style={{ paddingTop: "0" }}>
        <h3>Description</h3>
        <p style={{ paddingTop: "0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          praesentium temporibus, quasi assumenda in, repellat explicabo
          doloremque officia aliquid quo molestiae neque, impedit corrupti
          blanditiis quam! Ullam et itaque, praesentium officiis soluta ad quam
          magnam, ex dolore quas aspernatur. Repellat molestiae impedit quia,
          aut rem atque quidem non quas architecto. Delectus eius libero eos cum
          quis maiores laborum qui expedita dolor nemo quas sequi veniam quae
          voluptas, esse rerum autem voluptates enim? Consequuntur non rem dolor
          nesciunt assumenda distinctio iure, corrupti odio voluptatibus quidem
          officia totam, rerum recusandae nisi eum est. Maiores, doloremque!
          Quod aspernatur tempore expedita ab tempora rerum consectetur ipsa
          veniam illo, dolores libero facere voluptatum qui eveniet similique
          laudantium aperiam totam odit reprehenderit sit labore itaque, numquam
          vero eligendi. Fuga, perspiciatis totam ut tempore, velit quo fugit
          cumque eaque ipsam, accusamus voluptate quaerat corrupti ipsa nulla?
          Omnis vero animi voluptatum. Natus hic pariatur eveniet placeat
          sapiente quisquam officiis tempora saepe? Quas quae assumenda aliquid,
          atque explicabo perspiciatis. Expedita blanditiis non harum ab
          sapiente veniam obcaecati, veritatis quibusdam dolore accusantium ea.
          Repellendus suscipit facilis recusandae quasi dolores et quidem
          maiores autem, totam quos officiis accusamus? Ex consequatur
          cupiditate optio officia corporis nobis blanditiis nisi minima
          voluptatem laudantium! Culpa alias provident ullam fugit. Repellendus
          esse qui obcaecati! Saepe dolor similique cumque velit autem,
          aspernatur nisi quidem iste vel vitae corporis minus illum quibusdam
          nemo molestiae quasi optio amet. Atque beatae praesentium voluptas
          provident id. Adipisci molestiae accusantium aliquam obcaecati dolorem
          soluta provident omnis maxime tenetur corporis? Dolores et, temporibus
          facilis placeat animi tempora nostrum culpa molestias hic. Labore,
          iure illum. Provident asperiores sapiente impedit excepturi quibusdam
          laudantium laborum neque eos quos ipsam illo, quae tenetur a quia
          culpa aspernatur eligendi sequi veritatis earum consequuntur itaque
          reprehenderit porro magnam officia. Nostrum harum ut consequatur
          inventore accusantium laborum beatae asperiores cupiditate.
        </p>
        <p style={{ paddingTop: "0", paddingBottom: "0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          consequuntur saepe fuga, neque magni aliquam quibusdam perferendis
          tempore commodi, ratione illo sequi esse repellendus officiis
          consequatur, modi recusandae ut sunt cupiditate aspernatur debitis
          harum! Non nam fugit id fuga? Nemo possimus nobis eaque, voluptatibus,
          corrupti quidem laudantium veritatis obcaecati eveniet natus ea
          voluptates tempora, reprehenderit nam asperiores soluta consequatur
          totam ipsa consequuntur cum quam cupiditate commodi veniam voluptatum!
          Nobis distinctio magni itaque, rerum quibusdam corrupti illo repellat,
          cum sequi delectus reiciendis aliquid nemo, vero explicabo quidem
          illum nam sapiente rem assumenda quisquam? Odit ad veritatis magnam!
          Numquam deleniti, quis impedit nesciunt modi qui eligendi, repellat
          repudiandae dignissimos, perferendis velit voluptatum voluptate
          delectus esse. Magni suscipit, qui in assumenda ratione neque
          voluptates, inventore aliquam eius eum optio cum officiis, enim
          veritatis dolor non vitae deserunt accusamus tenetur quisquam
          consequatur necessitatibus iure dicta alias. Fugit repudiandae
          repellendus nesciunt quisquam quas, laboriosam sequi pariatur adipisci
          similique quam expedita vero aliquid earum debitis? Ipsum debitis amet
          tenetur doloremque tempore. Ad officiis sint, autem harum rerum quos.
          Et hic ea, libero distinctio impedit sed cupiditate dignissimos
          repudiandae commodi quae unde placeat! Facilis nam ex explicabo
          adipisci dolorem recusandae fugit quae, exercitationem dolorum minima,
          vero atque.
        </p>
      </div>
      <p
        onClick={() => setExpand(!expand)}
        style={{
          color: "#27AE60",
          cursor: "pointer",
        }}
      >
        {!expand ? "show more" : "show less"}
      </p>
    </section>
  );
});

export default Overview;
