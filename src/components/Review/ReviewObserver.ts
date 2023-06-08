//Функція оцінки клієнтами якості обслуговування по шкалі 0/10 - Pattern Спостерігач
const urlJsonReviews = "http://localhost:4000/reviews";
//Subscribes
export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

export class ResidentReviews implements ISubject {
  private nameres: string;
  private satisfactionLevel: number;
  private textReview: string;
  private administrationName: IObserver[];

  constructor(nameres: string, text: string) {
    this.nameres = nameres;
    this.textReview = text;
    this.administrationName = [];
  }

  public get nameResident(): string {
    return this.nameres;
  }

  public get satisfactionLevelGet(): number {
    return this.satisfactionLevel;
  }
  public get textRevieGet(): string {
    return this.textReview;
  }
  public set SatisfactionLevelSet(value: number) {
    this.satisfactionLevel = value;
    this.notify();
  }

  public attach(observer: IObserver) {
    this.administrationName.push(observer);
  }

  public detach(observer: IObserver) {
    const index = this.administrationName.indexOf(observer);
    if (index !== -1) {
      this.administrationName.splice(index, 1);
    }
  }

  public addReview(
    concreteSubject: ResidentReviews,
    administrationName: string
  ) {
    console.log({
      nameres: concreteSubject.nameResident,
      satisfactionLevel: concreteSubject.satisfactionLevelGet,
      textReview: concreteSubject.textRevieGet,
      administrationName: administrationName,
    });
    fetch(urlJsonReviews, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": Math.floor(Math.random() * 10001),
        "nameres": concreteSubject.nameResident,
        "satisfactionLevel": concreteSubject.satisfactionLevelGet,
        "textReview": concreteSubject.textRevieGet,
        "administrationName": administrationName,
      }),
    })
      .then((response) => response.json())
      .then((concreteSubject: ResidentReviews) => {
        window.alert("Review added to a database!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public notify() {
    for (const observer of this.administrationName) {
      observer.update(this);
    }
  }
}

//declare the update method used by subjects
export interface IObserver {
  update(subject: ISubject): void;
}

export class HotelAdministration implements IObserver {
  private administrationName: string;

  constructor(observerName: string = "Vlad") {
    this.administrationName = observerName;
  }

  public update(subject: ISubject) {
    if (subject instanceof ResidentReviews) {
      const concreteSubject: ResidentReviews = subject;
      concreteSubject.addReview(concreteSubject, this.administrationName);
      // if (concreteSubject.SatisfactionLevelGet >= 4) {
      //   alert(`Адміністратор ${this.administrationName} отримав оцінку від користувача ${concreteSubject.nameResident} стосовно якості обслуговування готелю. Оцінка: ${concreteSubject.SatisfactionLevelGet}. Адміністратор ${this.administrationName} задоволений результатом роботи готелю і вдячний ${concreteSubject.nameResident} за хорошу оцінку!`);
      // } else {
      //   alert(`Адміністратор ${this.administrationName} отримав оцінку від користувача ${concreteSubject.nameResident} стосовно якості обслуговування готелю. Оцінка: ${concreteSubject.SatisfactionLevelGet}. Адміністратор ${this.administrationName} просить ${concreteSubject.nameResident} прийняти вибачення і пообіцяв виправити ситуацію!`);
      // }
    }
  }
}
