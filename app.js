const {App, LogLevel, SocketModeReceiver} = require('@slack/bolt');
const modalDialogs = require('./modalDialogs');
const parseUrl = require('./imageParse');
const resizeImage = require('./imageResize');


const clientOptions = {
    // enable this for dev instance
    // slackApiUrl: 'https://dev.slack.com/api/'
};

// const socketModeReceiver = new SocketModeReceiver({
//   appToken: process.env.APP_TOKEN,
//   installerOptions: {
//     clientOptions,
//     // use the following when running against a dev instance and using OAuth
//     // authorizationUrl: 'https://dev.slack.com/oauth/v2/authorize',
//   },

//   // enable the following if you want to use OAuth
//   // clientId: process.env.CLIENT_ID,
//   // clientSecret: process.env.CLIENT_SECRET,
//   // stateSecret: 'my-state-secret',
//   // scopes: ['channels:read', 'chat:write', 'app_mentions:read', 'channels:manage', 'commands'],

//   logLevel: LogLevel.DEBUG,
// });


// const app = new App({
//     // receiver: socketModeReceiver,
//     token: "xoxb-5521065691703-5572958029760-OinBY134K5M84D7242buyZy6", //disable this if enabling OAuth in socketModeReceiver
//     signingSecret: "cd94d91528d61228c08290d80d15402a",
//     appToken: "xapp-1-A05G28PGXGV-5561168038866-bbfd9cc86cccbff2dffeb074845d6d4c8c1540d9c2b79d613885a154743ba187",
//     socketMode: true,
// });

const app = new App({
    // receiver: socketModeReceiver,
    token: "xoxb-3884918360485-5581939098240-s7Wrabmd1olt8j7KgHR4C4qG", // bolt
    // token: "xoxp-3884918360485-3881282280982-5563443528836-74a87ae19a4c6188446e35baf4d7f02c", // user
    signingSecret: "6838f5aa3276defce86a24dc768a2ac3",
    appToken: "xapp-1-A05H3TD20EL-5546517222631-8bc509db1ecd1b45fb676cab7f9d3909fa0dcbac5444122786c18a72104162d4",
    socketMode: true,
});


(async () => {
    await app.start();
    console.log('⚡️ Bolt app started');
})();


/**
 * ShortCut
 */

// 🌟 슬랙 메세지에서 앱 호출
app.shortcut('my_emo_thread', async ({shortcut, body, ack, context, client}) => {
    // Acknowledge shortcut request
    await ack();

    const view = modalDialogs.type_modal;
    view.private_metadata = JSON.stringify({channel: body.channel.id})

    // views.open 함수를 통해 모달 호출
    const result = await client.views.open({
        trigger_id: shortcut.trigger_id,
        view: view
    });
});


/**
 * Button
 */
// 이모티콘 타입 선택 버튼 이벤트
app.action('button_emo_type', async ({
    body,
    action,
    ack,
    client,
    view
}) => {
    // acknowledge the request right away
    await ack();

    try {
        // 이전 뷰에서 채널 정보 가져오기
        const metadata = JSON.parse(body.view.private_metadata);
        const channel_id = metadata.channel;

        // 버튼 값 가져오기
        const type = action.value;
        let srcList = parseUrl(type);

        const blocks = [];
        for (let item of srcList) {
            const blockSection = {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "image"
                },
                "accessory": {
                    "type": "image",
                    "image_url": item,
                    "alt_text": "emoticon"
                }
            };

            const blockActions = {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Send 🌟",
                            "emoji": true
                        },
                        "value": item,
                        "action_id": "button_emo_select"
                    }
                ],
            };

            const divider =
            {
                "type": "divider"
            }

            blocks.push(blockSection, blockActions, divider);
        }


        // 새로운 뷰에 채널과 타입 넣기
        const view = modalDialogs.emo_list;
        view.private_metadata = JSON.stringify({channel: channel_id, type: type})
        view.blocks = blocks

        // 모달 화면 바꾸기
        await client.views.update({
            // the ID of the view to update
            view_id: body.view.id,
            // an empty view
            view: view,
        });
    } catch
        (error) {
        console.error(error);
    }
});

// 이모티콘 상세페이지 이동
app.action('button_emo_detail_01', async ({
                                              body,
                                              action,
                                              ack,
                                              client,
                                              view
                                          }) => {
    console.log('TODO 이모티콘 상세보기');
    console.log(action);

    // acknowledge the request right away
    await ack();

    try {
        const type = action.value;
        let url = "";
        switch (type) {
            case "choonsik-and-friends":
                url = "https://e.kakao.com/t/choonsik-and-friends";
                break;
            case "sweet-rabbit-tosimi-ver-9":
                url = "https://e.kakao.com/t/sweet-rabbit-tosimi-ver-9";
                break;
        }

        // open website
    } catch (error) {
        console.error(error);
    }
});

// 이모티콘 선택 및 메세지 전송
app.action('button_emo_select', async ({
                                           body,
                                           action,
                                           ack,
                                           client,
                                           view
                                       }) => {
    // acknowledge the request right away
    await ack();

    // call the modal
    try {
        const metadata = JSON.parse(body.view.private_metadata);
        const channel_id = metadata.channel;

        // const image_url = resizeImage(action.value);
        const image_url = action.value;

        const result = await client.users.info({
            user: body.user.id
        });

        const userName = result.user.real_name; // User's display name
        const userIconUrl = result.user.profile.image_192; // User's profile image URL

        await client.chat.postMessage({
            // text: `From @${body.user.username} ⭐️`,
            username: userName,
            icon_url: userIconUrl,
            channel: channel_id,
            blocks: [
                {
                    "type": "image",
                    "image_url": image_url,
                    "alt_text": "🌟"
                }
            ]
        });

        await client.views.update({
            // the ID of the view to update
            view_id: body.view.id,
            view: {
                "type": "modal",
                "title": {
                    "type": "plain_text",
                    "text": "이모티콘 보내기 성공 🥰"
                },
                "blocks": []
            }
        });
    } catch (error) {
        console.error(error);
    }
});


/**
 * Return Action
 */

const responseModalEmoType = async ({
                                        ack,
                                        view,
                                        client,
                                        logger,
                                    }) => {
    try {
        // 중첩 객체에서 값 꺼내기
        const values = view["state"]["values"];

        console.log("🙏🙏🏻🙏🏻🙏🏻🙏🏻");

        await ack();

        const metadata = JSON.parse(view.private_metadata);
        const channel_id = metadata.channel;

        const image_url = "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8f324a0b9c48f77dbce3a43bd11ce785";
        await client.chat.postMessage({
            text: "message",
            channel: channel_id,
            attachments: [{"title": "Cat", "image_url": image_url}]
        });
    } catch (error) {
        logger.error(error);
    }
};

const responseModalEmoGlobalSelect = async ({
                                                body,
                                                ack,
                                                view,
                                                client,
                                                logger,
                                            }) => {
    try {
        // 중첩 객체에서 값 꺼내기
        const values = view["state"]["values"];

        console.log("🙏🙏🏻🙏🏻🙏🏻🙏🏻");
        console.log(body);

        //
        // const name = values["#name"]["#message"].value ?? "";
        // const message = values[`#content`][`#message`].value ?? "";

        // 체크 되어있다면 문제없이 ACK
        await ack();

        const metadata = JSON.parse(view.private_metadata);
        const channel_id = metadata.channel;

        const image_url = "https://item.kakaocdn.net/do/42827d1e8227c8b4251acffb9e899e4e8f324a0b9c48f77dbce3a43bd11ce785";
        await client.chat.postMessage({
            text: "message",
            channel: channel_id,
            attachments: [{"title": "Cat", "image_url": image_url}]
        });
    } catch (error) {
        logger.error(error);
    }
};

app.view("my_emo_thread", responseModalEmoType);
app.view("my_emo_thread_select", responseModalEmoGlobalSelect);


// /**
//  * 🌸 Global Shortcut example
//  * callback id : `my_emo_global` as
//  * 타입 선택 후,`type_modal` modal 호출
//  */
// app.shortcut('my_emo_global', async ({shortcut, body, ack, context, client}) => {
//     try {
//         console.log("🌸🌸🌸🌸🌸");
//         console.log(shortcut);
//
//         // Acknowledge shortcut request
//         await ack();
//         console.log(body)
//
//         // global은 못 가져옴 ㅠ
//         const view = modalDialogs.type_modal;
//         view.private_metadata = JSON.stringify({ channel: body.channel.id })
//
//
//         // views.open 함수를 통해 모달 호출
//         const result = await client.views.open({
//             trigger_id: shortcut.trigger_id,
//             view: modalDialogs.type_modal
//         });
//
//         // 이후 submit 시, `my_emo_global` 콜백 호출 => responseModalEmoType()
//     } catch (error) {
//         console.error(error);
//     }
// });
// // subscribe to 'app_mention' event in your App config
// // need app_mentions:read and chat:write scopes
// app.event('app_mention', async ({event, context, client, say}) => {
//     try {
//         await say({
//             "blocks": [
//                 {
//                     "type": "section",
//                     "text": {
//                         "type": "mrkdwn",
//                         "text": `Thanks for the mention <@${event.user}>! Click my fancy button`
//                     },
//                     "accessory": {
//                         "type": "button",
//                         "text": {
//                             "type": "plain_text",
//                             "text": "Button",
//                             "emoji": true
//                         },
//                         "value": "click_me_123",
//                         "action_id": "first_button"
//                     }
//                 }
//             ]
//         });
//     } catch (error) {
//         console.error(error);
//     }
// });
//
// // Publish a App Home
// app.event('app_home_opened', async ({event, client}) => {
//     await client.views.publish({
//         user_id: event.user,
//         view: {
//             "type": "home",
//             "blocks": [
//                 {
//                     "type": "section",
//                     "block_id": "section678",
//                     "text": {
//                         "type": "mrkdwn",
//                         "text": "App Home Published"
//                     },
//                 }
//             ]
//         },
//     });
// });
//
// // Message Shortcut example
// app.shortcut('launch_msg_shortcut', async ({shortcut, body, ack, context, client}) => {
//     await ack();
//     console.log(shortcut);
// });
//
// // Global Shortcut example
// // setup global shortcut in App config with `launch_shortcut` as callback id
// // add `commands` scope
// app.shortcut('launch_shortcut', async ({shortcut, body, ack, context, client}) => {
//     try {
//         // Acknowledge shortcut request
//         await ack();
//
//         // Call the views.open method using one of the built-in WebClients
//         const result = await client.views.open({
//             trigger_id: shortcut.trigger_id,
//             view: {
//                 type: "modal",
//                 title: {
//                     type: "plain_text",
//                     text: "My App"
//                 },
//                 close: {
//                     type: "plain_text",
//                     text: "Close"
//                 },
//                 blocks: [
//                     {
//                         type: "section",
//                         text: {
//                             type: "mrkdwn",
//                             text: "About the simplest modal you could conceive of :smile:\n\nMaybe <https://api.slack.com/reference/block-kit/interactive-components|*make the modal interactive*> or <https://api.slack.com/surfaces/modalDialogs/using#modifying|*learn more advanced modal use cases*>."
//                         }
//                     },
//                     {
//                         type: "context",
//                         elements: [
//                             {
//                                 type: "mrkdwn",
//                                 text: "Psssst this modal was designed using <https://api.slack.com/tools/block-kit-builder|*Block Kit Builder*>"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         });
//     } catch (error) {
//         console.error(error);
//     }
// });
//
// // subscribe to `message.channels` event in your App Config
// // need channels:read scope
// app.message('hello', async ({message, say}) => {
//     say() sends a message to the channel where the event was triggered
//     no need to directly use 'chat.postMessage', no need to include token
//     await say({
//       "blocks": [
//         {
//           "type": "section",
//           "text": {
//             "type": "mrkdwn",
//             "text": `Thanks for the mention <@${message.user}>! Click my fancy button`
//           },
//           "accessory": {
//             "type": "button",
//             "text": {
//               "type": "plain_text",
//               "text": "Button",
//               "emoji": true
//             },
//             "value": "click_me_123",
//             "action_id": "first_button"
//           }
//         }
//       ]
//     });
//
//     await say(`Hey there <@${message.user}>!`);
// });
//
// // Listen and respond to button click
// app.action('first_button', async ({action, ack, say, context}) => {
//     console.log('button clicked');
//     console.log(action);
//     // acknowledge the request right away
//     await ack();
//     await say('Thanks for clicking the fancy button');
// });
// Listen to slash command
// need to add commands permission
// create slash command in App Config
// app.command('/socketslash', async ({command, ack, say}) => {
//     // Acknowledge command request
//     await ack();
//
//     await say(`${command.text}`);
// });
