window.__XERABANK_XDM__ = {
  "contentHash": "816b22c89e0bda745eaf0087511b574cce5c69929fe70b74bb0d8c33856091bd",
  "edgeDomain": "aeppsemea.data.adobedc.net",
  "flow": {
    "config": {
      "consent": {},
      "globalsStatic": {
        "modelVersion": "1.0.0"
      },
      "sources": {
        "src_web": {
          "package": "@elbwalker/walker.js"
        }
      },
      "destinations": {
        "aep-edge": {
          "package": "destination-aep-edge",
          "settings": {
            "datastreamId": "c015ad57-f769-4bbc-9583-073cc37a05a4",
            "samplingRate": 1
          }
        }
      }
    },
    "sourceMapping": {
      "src_web": {
        "package": "@elbwalker/walker.js",
        "data": [
          "page_url",
          "page_name",
          "site_section",
          "form_name",
          "form_stage",
          "application_status",
          "validation_error",
          "email",
          "phone",
          "applied_product_id",
          "product_id",
          "bank_product_name",
          "bank_product_category",
          "interest_rate"
        ]
      }
    },
    "mapping": {
      "page": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "web.webpagedetails.pageViews"
              }
            }
          }
        }
      },
      "application": {
        "load": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "application": {
                    "map": {
                      "formName": {
                        "key": "data.form_name"
                      },
                      "stage": {
                        "key": "data.form_stage"
                      },
                      "status": {
                        "key": "data.application_status"
                      },
                      "validationError": {
                        "key": "data.validation_error"
                      },
                      "email": {
                        "key": "data.email"
                      },
                      "phone": {
                        "key": "data.phone"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "xerabank.application"
              }
            }
          },
          "identity": {
            "Email": [
              {
                "id": {
                  "key": "data.email"
                },
                "authenticatedState": "ambiguous"
              }
            ]
          }
        },
        "start": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "application": {
                    "map": {
                      "formName": {
                        "key": "data.form_name"
                      },
                      "stage": {
                        "key": "data.form_stage"
                      },
                      "status": {
                        "key": "data.application_status"
                      },
                      "validationError": {
                        "key": "data.validation_error"
                      },
                      "email": {
                        "key": "data.email"
                      },
                      "phone": {
                        "key": "data.phone"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "xerabank.application"
              }
            }
          },
          "identity": {
            "Email": [
              {
                "id": {
                  "key": "data.email"
                },
                "authenticatedState": "ambiguous"
              }
            ]
          }
        },
        "complete": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "application": {
                    "map": {
                      "formName": {
                        "key": "data.form_name"
                      },
                      "stage": {
                        "key": "data.form_stage"
                      },
                      "status": {
                        "key": "data.application_status"
                      },
                      "validationError": {
                        "key": "data.validation_error"
                      },
                      "email": {
                        "key": "data.email"
                      },
                      "phone": {
                        "key": "data.phone"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "xerabank.application"
              }
            }
          },
          "identity": {
            "Email": [
              {
                "id": {
                  "key": "data.email"
                },
                "authenticatedState": "ambiguous"
              }
            ]
          }
        },
        "error": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "application": {
                    "map": {
                      "formName": {
                        "key": "data.form_name"
                      },
                      "stage": {
                        "key": "data.form_stage"
                      },
                      "status": {
                        "key": "data.application_status"
                      },
                      "validationError": {
                        "key": "data.validation_error"
                      },
                      "email": {
                        "key": "data.email"
                      },
                      "phone": {
                        "key": "data.phone"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "xerabank.application"
              }
            }
          },
          "identity": {
            "Email": [
              {
                "id": {
                  "key": "data.email"
                },
                "authenticatedState": "ambiguous"
              }
            ]
          }
        }
      },
      "product": {
        "view": {
          "data": {
            "map": {}
          }
        }
      }
    }
  },
  "ajvBundle": {
    "schemas": {
      "tgt_page_view": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/banking.application.crosswalk.yaml@1.0.0 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "application": {
                "type": "object",
                "properties": {
                  "formName": {
                    "title": "formName",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "stage": {
                    "title": "stage",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "status": {
                    "title": "status",
                    "description": "Indicates the current disposition of the Action.",
                    "type": "string"
                  },
                  "validationError": {
                    "title": "validationError",
                    "description": "For failed actions, more information on the cause of the failure.",
                    "type": "string"
                  },
                  "email": {
                    "title": "email",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "phone": {
                    "title": "phone",
                    "description": "The telephone number.",
                    "type": "string"
                  },
                  "productId": {
                    "title": "productId",
                    "description": "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_application_event": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/banking.application.crosswalk.yaml@1.0.0 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "application": {
                "type": "object",
                "properties": {
                  "formName": {
                    "title": "formName",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "stage": {
                    "title": "stage",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "status": {
                    "title": "status",
                    "description": "Indicates the current disposition of the Action.",
                    "type": "string"
                  },
                  "validationError": {
                    "title": "validationError",
                    "description": "For failed actions, more information on the cause of the failure.",
                    "type": "string"
                  },
                  "email": {
                    "title": "email",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "phone": {
                    "title": "phone",
                    "description": "The telephone number.",
                    "type": "string"
                  },
                  "productId": {
                    "title": "productId",
                    "description": "The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.\n        ",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_bank_product_lookup": {
        "title": "Record Schema",
        "description": "Generated from crosswalks/banking.product.crosswalk.yaml@1.0.0 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "bankproduct": {
                "type": "object",
                "properties": {
                  "productId": {
                    "title": "productId",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "interestRate": {
                    "title": "interestRate",
                    "description": "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.",
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        "additionalProperties": true
      }
    }
  }
};
