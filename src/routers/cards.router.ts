import express, { Request, Response } from 'express';
import { Card, CreateCardRequest, GetCardsResponse } from '../types/cards';
import { IdParams } from '../types/common/id.params';

export const cardsRouter = express.Router();

cardsRouter.get(
  '/',
  (request: Request<{}, {}>, response: Response<GetCardsResponse>) => {
    // TODO: Return cards
  },
);

cardsRouter.get(
  '/:id',
  (request: Request<IdParams, {}>, response: Response<Card>) => {
    // TODO: Return card
    request.params.id;
  },
);

cardsRouter.post(
  '/',
  (request: Request<{}, CreateCardRequest>, response: Response<Card>) => {
    // TODO: Create card
  },
);

cardsRouter.put(
  '/:id',
  (request: Request<IdParams, CreateCardRequest>, response: Response<Card>) => {
    // TODO: Update card
  },
);

cardsRouter.delete(
  '/:id',
  (request: Request<IdParams>, response: Response<void>) => {
    // TODO: Delete card
  },
);
