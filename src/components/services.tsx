import { Subject } from 'rxjs';

const subject = new Subject();


export const messageService = {
    openSidebar: (msg: any) => subject.next({ data: msg }),
    getSidebar: () => subject.asObservable()

}