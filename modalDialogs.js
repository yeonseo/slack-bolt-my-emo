const modalDialogs = {
    "default": {
        type: "modal",
        title: {
            type: "plain_text",
            text: "My App"
        },
        close: {
            type: "plain_text",
            text: "Close"
        },
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "About the simplest modal you could conceive of :smile:\n\nMaybe <https://api.slack.com/reference/block-kit/interactive-components|*make the modal interactive*> or <https://api.slack.com/surfaces/modalDialogs/using#modifying|*learn more advanced modal use cases*>."
                }
            },
            {
                type: "context",
                elements: [
                    {
                        type: "mrkdwn",
                        text: "Psssst this modal was designed using <https://api.slack.com/tools/block-kit-builder|*Block Kit Builder*>"
                    }
                ]
            }
        ]
    },
    "image_modal": {
        "title": {
            "type": "plain_text",
            "text": "Modal Title"
        },
        "callback_id" : "my_emo_thread",
        "blocks": [
            {
                "type": "input",
                "element": {
                    "type": "plain_text_input",
                    "action_id": "message",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Placeholder text for single-line input"
                    }
                },
                "label": {
                    "type": "plain_text",
                    "text": "Label"
                },
                "hint": {
                    "type": "plain_text",
                    "text": "Hint text"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "카카오프렌즈"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8f324a0b9c48f77dbce3a43bd11ce785",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4ef604e7b0e6900f9ac53a43965300eb9a",
                    "alt_text": "cute cat"
                }
            }
        ],
        "submit": {
            "type": "plain_text",
            "text": "보내기"
        },
        "type": "modal"
    },
    "type_modal" : {
        "type": "modal",
        "title": {
            "type": "plain_text",
            "text": "가가오 이모티콘 🥰",
            "emoji": true
        },
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*춘식이는 프렌즈*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/da7615312001f7251bf393487d9c1abff43ad912ad8dd55b04db6a64cddaf76d",
                    "alt_text": "Airstream Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "choonsik-and-friends",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "choonsik-and-friends",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*토심이는 콩짝콩짝*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/2cae60600383826fb997e24271562ae4f43ad912ad8dd55b04db6a64cddaf76d",
                    "alt_text": "Redwood Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "sweet-rabbit-tosimi-ver-9",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "sweet-rabbit-tosimi-ver-9",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*늬에시의 여름일상 2*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/1b952058f8889c1cd8f00f730d20d836f43ad912ad8dd55b04db6a64cddaf76d",
                    "alt_text": "Redwood Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "eunuchs-summer-day-2",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "eunuchs-summer-day-2",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*몰티즈 데일리 댕댕라이프*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/30fafa325441e538e23fd8d2a0a515ac8f324a0b9c48f77dbce3a43bd11ce785",
                    "alt_text": "Redwood Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "maltese-daily-life-as-a-dog",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "maltese-daily-life-as-a-dog",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*꼬질 망그러진 곰*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/dc9561970173c28a13654c3f14180b4bf43ad912ad8dd55b04db6a64cddaf76d",
                    "alt_text": "Redwood Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "broken-bear-grubby-ver",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "broken-bear-grubby-ver",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*마루는 강쥐*"
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/4e86c5076769b37c10aade6c8a0fc47ff43ad912ad8dd55b04db6a64cddaf76d",
                    "alt_text": "Redwood Suite"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "이모티콘 리스트 ➡️",
                            "emoji": true
                        },
                        "value": "maru-the-puppy-girl-",
                        "action_id": "button_emo_type"
                    },
                    // {
                    //     "type": "button",
                    //     "text": {
                    //         "type": "plain_text",
                    //         "text": "View Details",
                    //         "emoji": true
                    //     },
                    //     "value": "maru-the-puppy-girl-",
                    //     "action_id": "button_emo_detail_01"
                    // }
                ]
            },
            {
                "type": "divider"
            }
        ]
    },
    "emo_list": {
        "type": "modal",
        "callback_id" : "my_emo_thread_select",
        "submit": {
            "type": "plain_text",
            "text": "Submit",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Cancel",
            "emoji": true
        },
        "title": {
            "type": "plain_text",
            "text": "Your accommodation",
            "emoji": true
        },
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8f324a0b9c48f77dbce3a43bd11ce785",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8f324a0b9c48f77dbce3a43bd11ce785",
                        "action_id": "button_emo_select"
                    }
                ],
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4ef604e7b0e6900f9ac53a43965300eb9a",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4ef604e7b0e6900f9ac53a43965300eb9a",
                        "action_id": "button_emo_select"
                    }
                ],
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e9f5287469802eca457586a25a096fd31",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e9f5287469802eca457586a25a096fd31",
                        "action_id": "button_emo_select"
                    }
                ],
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e9f17e489affba0627eb1eb39695f93dd",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e9f17e489affba0627eb1eb39695f93dd",
                        "action_id": "button_emo_select"
                    }
                ],
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e15b3f4e3c2033bfd702a321ec6eda72c",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e15b3f4e3c2033bfd702a321ec6eda72c",
                        "action_id": "button_emo_select"
                    }
                ],
            },{
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e4022de826f725e10df604bf1b9725cfd",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e4022de826f725e10df604bf1b9725cfd",
                        "action_id": "button_emo_select"
                    }
                ],
            },{
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "This is a section block with an accessory image."
                },
                "accessory": {
                    "type": "image",
                    "image_url": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8b566dca82634c93f811198148a26065",
                    "alt_text": "cute cat"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "보내기 🌟",
                            "emoji": true
                        },
                        "value": "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8b566dca82634c93f811198148a26065",
                        "action_id": "button_emo_select"
                    }
                ],
            },
            // {
            //     "type": "section",
            //     "text": {
            //         "type": "mrkdwn",
            //         "text": "This is a section block with an accessory image."
            //     },
            //     "accessory": {
            //         "type": "image",
            //         "image_url": "image_here",
            //         "alt_text": "cute cat"
            //     }
            // },
            // {
            //     "type": "actions",
            //     "elements": [
            //         {
            //             "type": "button",
            //             "text": {
            //                 "type": "plain_text",
            //                 "text": "보내기 🌟",
            //                 "emoji": true
            //             },
            //             "value": "image_here",
            //             "action_id": "button_emo_select"
            //         }
            //     ],
            // }
        ]
    }
}

module.exports = modalDialogs;
