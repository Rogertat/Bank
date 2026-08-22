window.__XDM_ACCEL_FLOW__ = {
  "contentHash": "b96f5354e6c62f2ace02ab395f46129d6c0d5346e8833a97f3183956a38997e0",
  "edgeDomain": "edge.adobedc.net",
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
            "datastreamId": "c015ad57-f769-4bbc-9583-073cc37a05a4"
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
          "interest_rate",
          "search_term",
          "campaign_name",
          "campaign_category",
          "campaign_label",
          "campaign_placement",
          "campaign_component",
          "campaign_region_path"
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
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
              }
            ]
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
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
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
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
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
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
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
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "search": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "campaign": {
        "click": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "URL": {
                        "key": "data.page_url"
                      },
                      "name": {
                        "key": "data.page_name"
                      },
                      "siteSection": {
                        "key": "data.site_section"
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
                        "key": "data.email",
                        "fn": "hash.sha256"
                      },
                      "phone": {
                        "key": "data.phone",
                        "fn": "hash.sha256"
                      },
                      "productId": {
                        "key": "data.applied_product_id"
                      }
                    }
                  },
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              }
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": "hash.sha256"
                }
              },
              {
                "id": {
                  "key": "data.phone",
                  "fn": "hash.sha256"
                }
              }
            ]
          }
        }
      },
      "product": {
        "view": {
          "data": {
            "map": {
              "_aeppsemea": {
                "map": {
                  "bankproduct": {
                    "map": {
                      "productId": {
                        "key": "data.product_id"
                      },
                      "name": {
                        "key": "data.bank_product_name"
                      },
                      "category": {
                        "key": "data.bank_product_category"
                      },
                      "interestRate": {
                        "key": "data.interest_rate"
                      }
                    }
                  }
                }
              }
            }
          },
          "identity": {
            "productSKU": [
              {
                "id": {
                  "key": "data.product_id"
                },
                "primary": true
              }
            ]
          }
        }
      }
    }
  },
  "ajvBundle": {
    "schemas": {
      "tgt_banking_event": {
        "title": "banking.web.banking-event",
        "type": "object",
        "description": "Banking Site Experience Event — composed by xdm-accelerator from catalog banking.web@1.0.0.",
        "properties": {
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "application": {
                "type": "object",
                "properties": {
                  "formName": {
                    "title": "formName",
                    "type": "string",
                    "description": "The name of the item."
                  },
                  "stage": {
                    "title": "stage",
                    "type": "string",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy."
                  },
                  "status": {
                    "title": "status",
                    "type": "string",
                    "description": "Indicates the current disposition of the Action."
                  },
                  "validationError": {
                    "title": "validationError",
                    "type": "string",
                    "description": "For failed actions, more information on the cause of the failure."
                  },
                  "email": {
                    "title": "email",
                    "type": "string",
                    "description": "Email address.",
                    "required": []
                  },
                  "phone": {
                    "title": "phone",
                    "type": "string",
                    "description": "The telephone number."
                  },
                  "productId": {
                    "title": "productId",
                    "type": "string",
                    "description": "The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc."
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "type": "string",
                    "description": "The name of the item."
                  },
                  "category": {
                    "title": "category",
                    "type": "string",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy."
                  },
                  "label": {
                    "title": "label",
                    "type": "string",
                    "description": "An alias for the item."
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
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference",
            "description": "A unique identifier for the time-series event."
          },
          "eventMergeId": {
            "title": "ExperienceEvent merge ID",
            "description": "An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.",
            "type": "string"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string",
            "description": "The primary event type for this time-series record."
          },
          "identityMap": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "type": "object",
                "meta:xdmType": "object",
                "properties": {
                  "authenticatedState": {
                    "description": "The state this identity is authenticated as for this observed ExperienceEvent.",
                    "type": "string",
                    "default": "ambiguous",
                    "enum": [
                      "ambiguous",
                      "authenticated",
                      "loggedOut"
                    ],
                    "meta:enum": {
                      "ambiguous": "Ambiguous",
                      "authenticated": "User identified by a login or similar action that was valid at the time of the event observation.",
                      "loggedOut": "User was identified by a login action at some point of time previously, but is not currently logged in."
                    },
                    "meta:xdmType": "string",
                    "meta:xdmField": "xdm:authenticatedState"
                  },
                  "id": {
                    "title": "Identifier",
                    "type": "string",
                    "description": "Identity of the consumer in the related namespace.",
                    "meta:xdmType": "string",
                    "meta:xdmField": "xdm:id"
                  },
                  "primary": {
                    "title": "Primary",
                    "type": "boolean",
                    "default": false,
                    "description": "Indicates this identity is the preferred identity. Is used as a hint to help systems better organize how identities are queried.",
                    "meta:xdmType": "boolean",
                    "meta:xdmField": "xdm:primary"
                  }
                },
                "meta:referencedFrom": "https://ns.adobe.com/xdm/context/identityitem"
              },
              "meta:xdmType": "array"
            }
          },
          "producedBy": {
            "title": "Produced By",
            "description": "Value that describes the producer of the event - suggested values would be 'self', 'system', 'salesRep', etc. Can be used to filter out certain producers if needed.",
            "type": "string"
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "isPaid": {
                "title": "Is paid",
                "type": "boolean",
                "description": "Indicate if the search is paid or not."
              },
              "keywords": {
                "title": "Keywords",
                "type": "string",
                "description": "Keywords for the search."
              },
              "pageDepth": {
                "title": "Page depth",
                "type": "integer",
                "description": "Page depth in the search results."
              },
              "position": {
                "title": "Listing position",
                "type": "integer",
                "description": "Position or rank of the listing in the search result page."
              },
              "searchEngine": {
                "title": "Search engine",
                "type": "string",
                "description": "The search engine used by the search."
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "type": "string",
                "format": "uri",
                "description": "The application specified identifier used to identify the search engine used by the search."
              },
              "slot": {
                "title": "Page slot",
                "type": "string",
                "description": "Named section of the page where the search result appeared, for example, top or side."
              }
            }
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time",
            "description": "The time when an event or observation occurred."
          },
          "web": {
            "title": "Web",
            "description": "Link clicks, web page details, referrer information, and browser details.",
            "type": "object",
            "properties": {
              "webInteraction": {
                "title": "Web interaction",
                "type": "object",
                "description": "Details about the web link or URL that corresponds to where the interaction occurred.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The actual link or URL used for this web interaction."
                  },
                  "linkClicks": {
                    "title": "Link Clicks",
                    "description": "Click of a web link has occurred.",
                    "type": "object",
                    "properties": {
                      "id": {
                        "title": "Unique Identifier",
                        "type": "string",
                        "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                      },
                      "value": {
                        "type": "number",
                        "description": "The quantifiable value of this measure."
                      }
                    },
                    "required": [
                      "value"
                    ]
                  },
                  "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "The normative name used for this web link, used for classification purposes."
                  },
                  "region": {
                    "title": "Region",
                    "type": "string",
                    "description": "The region name represents the region or area of a document that the web link belongs to such as header or footer."
                  },
                  "type": {
                    "title": "Type",
                    "type": "string",
                    "description": "The link type.",
                    "enum": [
                      "download",
                      "exit",
                      "other"
                    ]
                  }
                }
              },
              "webPageDetails": {
                "title": "Web page details",
                "type": "object",
                "description": "Details about the web page where the web interaction occurred.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`."
                  },
                  "isErrorPage": {
                    "title": "Is error page",
                    "type": "boolean",
                    "description": "Flag that indicate if the page is error page or not.  Error here is defined by the application, and may nor may not correspond to a page served with an HTTP error code.  This flag is used to broadly categorize web interactions."
                  },
                  "isHomePage": {
                    "title": "Is home page",
                    "type": "boolean",
                    "description": "Flag that indicate if the page is the site home page or not.  The definition of home page is determined by the application, but is commonly used to designate a top level landing page or common site entry point.  This flag is used to broadly categorize web interactions."
                  },
                  "isPreRendered": {
                    "title": "Is pre-rendered",
                    "type": "boolean",
                    "description": "Flag that indicates if the page has been pre-rendered or partially pre-rendered prior to being viewed."
                  },
                  "name": {
                    "title": "Name",
                    "type": "string",
                    "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes."
                  },
                  "pageViews": {
                    "title": "Page Views",
                    "description": "View(s) of a webpage has occurred.",
                    "type": "object",
                    "properties": {
                      "id": {
                        "title": "Unique Identifier",
                        "type": "string",
                        "description": "Unique identifier of the measure. In cases of data collection using lossy communication channels, such as mobile apps or websites with offline functionality, where transmission of measures cannot be ensured, this property contains a client-generated, unique ID of the measure taken. It is best practice to make this sufficiently long to ensure enough entropy. Additionally, if information such as time stamp, device ID, IP, or MAC address, or other potentially user-identifying values are incorporated in the generation of the xdm:id, the result should be hashed, so that no PII is encoded in the value, as the goal is not to identify user or device, but the specific measure in time."
                      },
                      "value": {
                        "type": "number",
                        "description": "The quantifiable value of this measure."
                      }
                    },
                    "required": [
                      "value"
                    ]
                  },
                  "server": {
                    "title": "Server",
                    "type": "string",
                    "description": "The normative or usual server that hosts the web page.  This may or may not be the host or server that actually served the page interaction, but is used for classification purposes."
                  },
                  "siteSection": {
                    "title": "Site section",
                    "type": "string",
                    "description": "The normative name of the site section where this web page resides, which may be used to classify or categorize the interaction."
                  },
                  "viewName": {
                    "title": "View Name",
                    "type": "string",
                    "description": "The name of the view, within a page. This is commonly used with Single Page Applications or pages that have tabs or controls that change a majority of the page layout."
                  }
                }
              },
              "webReferrer": {
                "title": "Web referrer",
                "type": "object",
                "description": "The referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded.",
                "properties": {
                  "URL": {
                    "title": "URL",
                    "type": "string",
                    "description": "The referrer URL."
                  },
                  "type": {
                    "title": "Type",
                    "type": "string",
                    "description": "The referrer type.",
                    "enum": [
                      "internal",
                      "external",
                      "search_engine",
                      "typed_bookmarked",
                      "email",
                      "social",
                      "usenet",
                      "hard_drive",
                      "nojs",
                      "conversational_ai",
                      "unknown"
                    ]
                  }
                }
              }
            }
          }
        },
        "required": [
          "_id",
          "timestamp"
        ],
        "additionalProperties": true
      },
      "tgt_bank_product_lookup": {
        "title": "banking.web.bank-product-lookup",
        "type": "object",
        "description": "Bank Product Lookup — composed by xdm-accelerator from catalog banking.web@1.0.0.",
        "properties": {
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "bankproduct": {
                "type": "object",
                "properties": {
                  "productId": {
                    "title": "productId",
                    "type": "string",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers."
                  },
                  "name": {
                    "title": "name",
                    "type": "string",
                    "description": "The name of the item."
                  },
                  "category": {
                    "title": "category",
                    "type": "string",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy."
                  },
                  "interestRate": {
                    "title": "interestRate",
                    "type": "number",
                    "description": "The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan."
                  }
                },
                "required": [
                  "productId"
                ]
              }
            },
            "required": [
              "bankproduct"
            ]
          },
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference",
            "description": "A unique identifier for the record."
          }
        },
        "required": [
          "_aeppsemea"
        ],
        "additionalProperties": true
      }
    }
  }
};
