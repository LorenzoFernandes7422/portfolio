"use client";

// ProjectGallery — capa clicável + modal nativo (<dialog>) navegável.
// É o único pedaço de Projects que precisa de JavaScript de estado; o resto
// da árvore (ProjectCard, a página) continua Server Component.

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const open = () => {
    setIndex(0);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      {/* a capa do card. <button>, não <div>, pra ganhar foco de teclado e
          leitor de tela de graça — "all: unset" no CSS tira a aparência
          padrão de botão sem perder o comportamento. */}
      <button
        type="button"
        className={styles.trigger}
        onClick={open}
        aria-label={`Open ${alt} gallery`}
      >
        <Image src={images[0]} alt={alt} fill className={styles.cover} />
      </button>

      {/* <dialog>: modal nativo. Escondido até chamarmos .showModal() nele.
          O navegador já resolve backdrop escurecido, foco preso e Esc-pra-fechar. */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={(e) => {
          // clicou no próprio <dialog> (fora do conteúdo) -> fecha.
          // clicou num filho (imagem, botão) -> o evento nem chega aqui como igual.
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className={`${styles.viewer} corner-frame`}>
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${alt} — image ${index + 1}`}
            fill
            className={styles.viewerImage}
          />
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
            <span className={styles.counter}>
              {index + 1} / {images.length}
            </span>
          </>
        )}

        <button
          type="button"
          className={styles.close}
          onClick={close}
          aria-label="Close"
        >
          ✕
        </button>
      </dialog>
    </>
  );
}
