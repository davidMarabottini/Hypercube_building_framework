//in HBF prevedo la possibilità di salvare o scaricare l'oggetto rappresentativo delle storie fatte in un certo periodo di tempo
// e di visualizzare la matrice relativa all'iperrettangolo definito dal framework.
// di seguito la definizione concettuale dei tipi per l'oggetto e per la matrice

/**
 * DEFINIZIONE TIPI PER GLI OGGETTI
 */

type storyTemplate = `${string}-${number}`; // corrisponde al formato degli id delle story ed epic
type availableStatus = "completed" | "in_progress" | "to_do"; // corrispondono agli che può assumere una story nel proprio ciclo di vita
type metrics = {[key: string]: number}

interface story {
      id: storyTemplate,
      createDate: number,
      endDate: number,
      title: string,
      description: string,
      status: availableStatus,
      assignee: string,
      reporter: string,
      tags: string[],
      metrics: metrics,
      parentId?: storyTemplate,
      level?: number,
}

interface metric {
  name: string;
  description: string;
  fn: (value: {[key: keyof metrics]: number}) => number;
  weight: number;
}

interface templateObject {
  area: string;
  metrics: {[key: string]: metric};
  stories: story[];
}

// ESEMPIO DI OGGETTO CHE RISPETTA LA DEFINIZIONE SOPRA
const o: templateObject = {
  area: "development",
  metrics: {},
  stories: [
    {
      id: "ST-10",
      parentId: "ST-1",
      level: 2,
      createDate: 1764424672000,
      endDate: 1764424672000,
      title: "Implement user authentication",
      description: "Develop a secure user authentication system using JWT.",
      status: "completed",
      assignee: "Alice",
      reporter: "Bob",
      tags: ["authentication", "security", "backend"],
      metrics: {
        theorical_effort: 13,
        real_effort: 12,
        has_tests: 1,
        has_documentation: 1,
        dod_respected: 0,
      },
    }
  ],
}

/*
* DEFINIZIONE MATRICE
*/

type CreateTuple<L extends number, T = number, A extends T[] = []> =
  A['length'] extends L ? A : CreateTuple<L, T, [...A, T]>;

type Matrix<N extends number> = CreateTuple<N, number>;

//ESEMPIO DI MATRICE
const rowExample: Matrix<3>[] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
