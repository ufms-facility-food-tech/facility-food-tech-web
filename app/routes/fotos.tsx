import { Container } from "~/components/container";

export default function Fotos() {
  const photos = [
    {
      id: 1,
      alt: "Foto 1",
      src: "images/fotos/IMG-20240410-WA0005.jpg",
    },
    {
      id: 2,
      alt: "Foto 2",
      src: "images/fotos/IMG-20240410-WA0006.jpg",
    },
    {
      id: 3,
      alt: "Foto 3",
      src: "images/fotos/IMG-20240410-WA0007.jpg",
    },
    {
      id: 4,
      alt: "Foto 4",
      src: "images/fotos/IMG-20240410-WA0008.jpg",
    },
    {
      id: 5,
      alt: "Foto 5",
      src: "images/fotos/IMG-20240410-WA0009.jpg",
    },
    {
      id: 6,
      alt: "Foto 6",
      src: "images/fotos/IMG-20240410-WA0010.jpg",
    },
    {
      id: 7,
      alt: "Foto 7",
      src: "images/fotos/IMG-20240410-WA0011.jpg",
    },
    {
      id: 8,
      alt: "Foto 8",
      src: "images/fotos/IMG-20240410-WA0012.jpg",
    },
    {
      id: 9,
      alt: "Foto 9",
      src: "images/fotos/IMG-20240410-WA0013.jpg",
    },
    {
      id: 10,
      alt: "Foto 10",
      src: "images/fotos/IMG-20240410-WA0014.jpg",
    },
    {
      id: 11,
      alt: "Foto 11",
      src: "images/fotos/IMG-20240410-WA0015.jpg",
    },
    {
      id: 12,
      alt: "Foto 12",
      src: "images/fotos/IMG-20240410-WA0016.jpg",
    },
    {
      id: 13,
      alt: "Foto 13",
      src: "images/fotos/IMG-20240410-WA0017.jpg",
    },
    {
      id: 14,
      alt: "Foto 14",
      src: "images/fotos/IMG-20240410-WA0018.jpg",
    },
    {
      id: 15,
      alt: "Foto 15",
      src: "images/fotos/IMG-20240410-WA0019.jpg",
    },
    {
      id: 16,
      alt: "Foto 16",
      src: "images/fotos/IMG-20240410-WA0020.jpg",
    },
    {
      id: 17,
      alt: "Foto 17",
      src: "images/fotos/IMG-20240410-WA0021.jpg",
    },
    {
      id: 18,
      alt: "Foto 18",
      src: "images/fotos/IMG-20240410-WA0022.jpg",
    },
    {
      id: 19,
      alt: "Foto 19",
      src: "images/fotos/IMG-20240410-WA0023.jpg",
    },
    {
      id: 20,
      alt: "Foto 20",
      src: "images/fotos/IMG-20240410-WA0024.jpg",
    },
    {
      id: 21,
      alt: "Foto 21",
      src: "images/fotos/IMG-20240410-WA0025.jpg",
    },
    {
      id: 22,
      alt: "Foto 22",
      src: "images/fotos/IMG-20240410-WA0026.jpg",
    },
    {
      id: 23,
      alt: "Foto 23",
      src: "images/fotos/IMG-20240410-WA0027.jpg",
    },
    {
      id: 24,
      alt: "Foto 24",
      src: "images/fotos/IMG-20240410-WA0028.jpg",
    },
    {
      id: 25,
      alt: "Foto 25",
      src: "images/fotos/IMG-20240410-WA0029.jpg",
    },
    {
      id: 26,
      alt: "Foto 26",
      src: "images/fotos/IMG-20240410-WA0030.jpg",
    },
    {
      id: 27,
      alt: "Foto 27",
      src: "images/fotos/IMG-20240410-WA0031.jpg",
    },
    {
      id: 28,
      alt: "Foto 28",
      src: "images/fotos/IMG-20240410-WA0032.jpg",
    },
    {
      id: 29,
      alt: "Foto 29",
      src: "images/fotos/IMG-20240410-WA0033.jpg",
    },
    {
      id: 30,
      alt: "Foto 30",
      src: "images/fotos/IMG-20240410-WA0034.jpg",
    },
    {
      id: 31,
      alt: "Foto 31",
      src: "images/fotos/IMG-20240410-WA0035.jpg",
    },
    {
      id: 32,
      alt: "Foto 32",
      src: "images/fotos/IMG-20240410-WA0036.jpg",
    },
    {
      id: 33,
      alt: "Foto 33",
      src: "images/fotos/IMG-20240410-WA0037.jpg",
    },
    {
      id: 34,
      alt: "Foto 34",
      src: "images/fotos/IMG-20240410-WA0038.jpg",
    },
    {
      id: 35,
      alt: "Foto 35",
      src: "images/fotos/IMG-20240410-WA0039.jpg",
    },
    {
      id: 36,
      alt: "Foto 36",
      src: "images/fotos/IMG-20240410-WA0040.jpg",
    },
  ];

  return (
    <Container title="Fotos">
      <div className="flex flex-wrap justify-center gap-4">
        {photos.map((photo) => (
          <figure key={photo.id} className="flex items-center w-60">
            <img src={photo.src} alt={photo.alt} />
          </figure>
        ))}
      </div>
    </Container>
  );
}
