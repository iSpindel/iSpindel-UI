import { IDataPoint } from './IDataPoint';

export class NumericalData implements IDataPoint {
    x: Date;
    y: number;
}

export interface IRawNumericalData {
    timestamp: string,
    value: string,
}