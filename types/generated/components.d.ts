import type { Schema, Struct } from '@strapi/strapi';

export interface PointsTableGroups extends Struct.ComponentSchema {
  collectionName: 'components_points_table_groups';
  info: {
    description: '';
    displayName: 'Groups';
  };
  attributes: {
    Teams: Schema.Attribute.Component<'points-table.table-entry', true>;
  };
}

export interface PointsTableTableEntry extends Struct.ComponentSchema {
  collectionName: 'components_points_table_table_entries';
  info: {
    displayName: 'Table Entry';
  };
  attributes: {
    Draws: Schema.Attribute.Integer;
    GoalsConceded: Schema.Attribute.Integer;
    GoalsScored: Schema.Attribute.Integer;
    MatchesPlayed: Schema.Attribute.Integer;
    Points: Schema.Attribute.Integer;
    TeamName: Schema.Attribute.String;
    Wins: Schema.Attribute.Integer;
  };
}

export interface RegionCities extends Struct.ComponentSchema {
  collectionName: 'components_region_cities';
  info: {
    description: '';
    displayName: 'Cities';
  };
  attributes: {
    Country: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    OperationalSince: Schema.Attribute.Date;
    State: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'points-table.groups': PointsTableGroups;
      'points-table.table-entry': PointsTableTableEntry;
      'region.cities': RegionCities;
    }
  }
}
