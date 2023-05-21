import { BehaviorSubject, from, shareReplay, tap } from "rxjs";

export class EventLoadStore<T> {
  private loadSource = new BehaviorSubject<T | null>(null);

  public state$ = this.loadSource.asObservable();

  constructor() {}
  protected _load(component$: Promise<T>) {
    const ob$ = from(component$).pipe(
      tap((component) => {
        this.loadSource.next(component);
      }),
      shareReplay(1)
    );
    ob$.subscribe();
    return ob$;
  }
}
