"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { imageLoader } from "@/utils/imageLoader";

const CardProfile = ({
  title,
  subTitle,
  imgSrc,
  imgAlt,
  summary,
  isHtml = false,
}) => {
  return (
    <CardContainer className="inter-var h-auto w-[80%]">
      <CardBody className="group/card relative flex h-auto w-full flex-wrap  gap-10 rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <div className="max-w-[35rem] flex-auto">
          <CardItem translateZ="100" className="mt-4">
            <Image
              loader={imageLoader}
              src={imgSrc}
              height={500}
              width={500}
              className="h-auto w-[35rem] rounded-xl object-cover group-hover/card:shadow-xl"
              alt={imgAlt}
            />
          </CardItem>
        </div>
        <div className="max-w-[35rem] flex-auto">
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            {subTitle}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as={!isHtml ? "p" : "div"}
            translateZ="60"
            className="mt-2 max-w-sm text-left text-sm text-neutral-500 dark:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: summary }}
          >
            {!isHtml ? <p>{summary}</p> : null}
          </CardItem>
          <Image
            className="float-right grid"
            src={"/sign.png"}
            width={300}
            height={250}
            alt="sign"
          />
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CardProfile;
