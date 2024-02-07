import React from "react";
import { Divider } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Post = () => {
  return (
    <div className="p-4 w-full">
      <div className="border-[1px] border-[#2d323b] rounded-lg p-10">
        <h1 className="p-4 text-white">Basic Typescript</h1>
        <Divider />
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis
          optio quas eligendi similique amet impedit, at cumque corporis minima
          labore sunt iure ullam libero veniam aut, dolorum voluptatum officiis
          quae dolorem enim laboriosam consequuntur. Quas assumenda doloremque
          quidem architecto aliquid! Nobis, facilis impedit expedita saepe totam
          et cupiditate consequatur enim aspernatur quibusdam vel deserunt ex
          sit repellat. Quod quo sed saepe incidunt praesentium corrupti rem ea
          sit, excepturi nihil. Voluptatem adipisci voluptate similique ullam
          sint dolore! Iure perferendis illo repellendus hic repellat incidunt!
          Asperiores omnis ipsa quasi repudiandae quo fugit nulla quidem ea
          delectus explicabo ab ad, harum doloremque dolorem. Totam, commodi.
          Soluta laboriosam voluptates, similique, molestias ut velit minus
          veritatis modi quisquam aperiam cum. Repudiandae, ullam eaque rem nisi
          voluptatibus libero minima excepturi, eos nemo laboriosam tempore
          fugit iure. Aut natus ad unde recusandae accusamus corrupti sequi iste
          voluptatibus eius tempora, molestiae eum magni nemo quidem expedita
          quas dolore quaerat? Odit harum consequatur magnam rem totam ipsum
          omnis soluta itaque ipsam tempore, adipisci illo, voluptas maxime
          optio? Beatae natus, eius libero earum perferendis impedit doloremque
          pariatur quia accusantium voluptates cupiditate optio iste modi
          laudantium dicta fugiat, fuga adipisci inventore assumenda laborum?
          Voluptatum repellat vitae, dolorum minima placeat delectus.
        </p>
        <div className="p-4">
          <Image
            isZoomed
            className="my-4"
            src="/1_moJeTvW97yShLB7URRj5Kg.png"
            width={1000}
            height={500}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
