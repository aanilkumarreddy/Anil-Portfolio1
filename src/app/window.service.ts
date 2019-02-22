import { Injectable } from "@angular/core";
import {
  GENERAL,
  CVITEMS,
  EDUCATION,
  CERTIFICATES,
  PROJECTS,
  VOLUNTEERING,
  LANGUAGES,
  CONTACT,
  INTERESTS,
  PUBLICATIONS,
  TALKS
} from "./model/cvItem.data";
import { CvItem } from "./model/CvItem.model";

@Injectable({
  providedIn: "root"
})
export class WindowService {
  constructor() {}

  getGeneralData() {
    return GENERAL;
  }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(CVITEMS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(CONTACT);
  }

  getInterestItems() {
    return Promise.resolve(INTERESTS);
  }

  getPublicationItems(): Promise<CvItem[]> {
    return Promise.resolve(PUBLICATIONS);
  }

  getTalkItems(): Promise<CvItem[]> {
    return Promise.resolve(TALKS);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
