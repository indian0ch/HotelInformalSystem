//Функція оцінки клієнтами якості обслуговування по шкалі 0/10 - Pattern Спостерігач
export interface ISubject {
  Attach(observer: IObserver): void;
  Detach(observer: IObserver): void;
  Notify(): void;
}

export class Residents implements ISubject {
  private nameres: string;
  private satisfactionLevel: number;
  private ListAdmins: IObserver[];

  constructor(nameres: string) {
    this.nameres = nameres;
    this.ListAdmins = [];
  }

  public get nameResident(): string {
    return this.nameres;
  }

  public get SatisfactionLevelGet(): number {
    return this.satisfactionLevel;
  }

  public set SatisfactionLevelSet(value: number) {
    this.satisfactionLevel = value;
    this.Notify();
  }

  public Attach(observer: IObserver) {
    this.ListAdmins.push(observer);
  }

  public Detach(observer: IObserver) {
    const index = this.ListAdmins.indexOf(observer);
    if (index !== -1) {
      this.ListAdmins.splice(index, 1);
    }
  }

  public Notify() {
    for (const observer of this.ListAdmins) {
      observer.Update(this);
    }
  }
}

export interface IObserver {
  Update(subject: ISubject): void;
}

export class HotelAdministration implements IObserver {
  private administrationName: string;

  constructor(observerName: string='Vlad') {
    this.administrationName = observerName;
  }

  public Update(subject: ISubject) {
    if (subject instanceof Residents) {
      const concreteSubject: Residents = subject;
      if (concreteSubject.SatisfactionLevelGet > 5) {
        console.log(`Адміністратор ${this.administrationName} отримав оцінку від користувача ${concreteSubject.nameResident} стосовно якості обслуговування готелю. Оцінка: ${concreteSubject.SatisfactionLevelGet}. Адміністратор ${this.administrationName} задоволений результатом роботи готелю і вдячний ${concreteSubject.nameResident} за хорошу оцінку!`);
      } else {
        console.log(`Адміністратор ${this.administrationName} отримав оцінку від користувача ${concreteSubject.nameResident} стосовно якості обслуговування готелю. Оцінка: ${concreteSubject.SatisfactionLevelGet}. Адміністратор ${this.administrationName} просить ${concreteSubject.nameResident} прийняти вибачення і пообіцяв виправити ситуацію!`);
      }
    }
  }
}

