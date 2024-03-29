import React, {Component} from 'react';

/**
 * Left for later
 */
export const readSchema = () => {
    return {
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "http://example.com/root.json",
        "type": "object",
        "title": "The Root Schema",
        "required": [
            "checked",
            "dimensions",
            "id",
            "name",
            "price",
            "tags"
        ],
        "properties": {
            "checked": {
                "$id": "#/properties/checked",
                "type": "boolean",
                "title": "The Checked Schema",
                "default": false,
                "examples": [
                    false
                ]
            },
            "dimensions": {
                "$id": "#/properties/dimensions",
                "type": "object",
                "title": "The Dimensions Schema",
                "required": [
                    "width",
                    "height"
                ],
                "properties": {
                    "width": {
                        "$id": "#/properties/dimensions/properties/width",
                        "type": "integer",
                        "title": "The Width Schema",
                        "default": 0,
                        "examples": [
                            5
                        ]
                    },
                    "height": {
                        "$id": "#/properties/dimensions/properties/height",
                        "type": "integer",
                        "title": "The Height Schema",
                        "default": 0,
                        "examples": [
                            10
                        ]
                    }
                }
            },
            "id": {
                "$id": "#/properties/id",
                "type": "integer",
                "title": "The Id Schema",
                "default": 0,
                "examples": [
                    1
                ]
            },
            "name": {
                "$id": "#/properties/name",
                "type": "string",
                "title": "The Name Schema",
                "default": "",
                "examples": [
                    "A green door"
                ],
                "pattern": "^(.*)$"
            },
            "price": {
                "$id": "#/properties/price",
                "type": "number",
                "title": "The Price Schema",
                "default": 0.0,
                "examples": [
                    12.5
                ]
            },
            "tags": {
                "$id": "#/properties/tags",
                "type": "array",
                "title": "The Tags Schema",
                "items": {
                    "$id": "#/properties/tags/items",
                    "type": "string",
                    "title": "The Items Schema",
                    "default": "",
                    "examples": [
                        "home",
                        "green"
                    ],
                    "pattern": "^(.*)$"
                }
            },
            "nestedList": {
                "$id": "#/properties/tags",
                "type": "array",
                "title": "Complex List",
                "items": {
                    "$id": "#/properties/dimensions_list",
                    "type": "object",
                    "title": "The Dimensions Schema",
                    "required": [
                        "width",
                        "height"
                    ],
                    "properties": {
                        "width": {
                            "$id": "#/properties/dimensions/properties/width",
                            "type": "integer",
                            "title": "The Width Schema",
                            "default": 0,
                            "examples": [
                                5
                            ]
                        },
                        "height": {
                            "$id": "#/properties/dimensions/properties/height",
                            "type": "integer",
                            "title": "The Height Schema",
                            "default": 0,
                            "examples": [
                                10
                            ]
                        },
                        "tags": {
                            "$id": "#/properties/tags_list",
                            "type": "array",
                            "title": "The Tags",
                            "items": {
                                "$id": "#/properties/tags/items",
                                "type": "string",
                                "title": "The Items Schema",
                                "default": "",
                                "examples": [
                                    "home",
                                    "green"
                                ],
                                "pattern": "^(.*)$"
                            }
                        }
                    }
                }
            }
        }
    }
};