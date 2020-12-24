import { Label } from '../label/types';

/**
 * actions types
 */
export enum IssueTypes {
  GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST',
  GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS',
  GET_ISSUES_FAILURE = 'GET_ISSUES_FAILUTE',

  CREATE_ISSUE_REQUEST = 'CREATE_ISSUE_REQUEST',
  UPDATE_ISSUE_REQUEST = 'UPDATE_ISSUE_REQUEST',
}

/**
 * data types
 */
export interface Issue {
  number: number;
  title: string;
  body?: string;
  labels?: Label[];
}

/**
 * state type
 */
export interface IssueState {
  readonly issues: Issue[];
}
