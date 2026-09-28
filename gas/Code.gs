/**
 * Приймає заявки з сайту (POST, application/x-www-form-urlencoded),
 * пише їх у аркуш "Ліди" цієї ж таблиці і шле повідомлення в Telegram.
 *
 * Налаштування — Project Settings → Script Properties (НЕ тут у коді):
 *   BOT_TOKEN   токен бота від @BotFather
 *   CHAT_ID     id чату/групи, куди слати заявки
 *
 * Деплой: Deploy → New deployment → тип "Web app",
 *   Execute as: Me, Who has access: Anyone.
 *   Скопійований URL встав у LEADS_ENDPOINT в js/main.js на сайті.
 *
 * Детальна інструкція — у gas/README.md.
 */
function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var token  = props.getProperty('BOT_TOKEN');
    var chatId = props.getProperty('CHAT_ID');

    var data = (e && e.parameter) || {};
    var name   = (data.name   || '').toString().trim();
    var phone  = (data.phone  || '').toString().trim();
    var source = (data.source || 'сайт').toString().trim();

    if (!name || !phone) {
      return jsonOutput({ ok: false, error: 'missing name/phone' });
    }

    logToSheet(name, phone, source);

    if (token && chatId) {
      sendTelegramMessage(token, chatId, name, phone, source);
    }

    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

/** So opening the deployment URL in a browser shows something sane. */
function doGet() {
  return jsonOutput({ ok: true, info: 'This endpoint only accepts POST from the site’s lead forms.' });
}

function logToSheet(name, phone, source) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Ліди');
  if (!sheet) {
    sheet = ss.insertSheet('Ліди');
    sheet.appendRow(['Дата', "Ім'я", 'Телефон', 'Джерело']);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date(), name, phone, source]);
}

function sendTelegramMessage(token, chatId, name, phone, source) {
  var text =
    '🆕 Нова заявка з сайту\n\n' +
    "👤 Ім'я: " + name + '\n' +
    '📞 Телефон: ' + phone + '\n' +
    '📍 Джерело: ' + source;

  var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
  var res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ chat_id: chatId, text: text }),
    muteHttpExceptions: true,
  });
  // Якщо Telegram поверне помилку (наприклад, невірний CHAT_ID), лишимо
  // слід у логах виконання скрипта (Executions), щоб було що дебажити —
  // але не валимо весь запит, бо заявка вже безпечно лежить у таблиці.
  var code = res.getResponseCode();
  if (code !== 200) {
    console.error('Telegram sendMessage failed: ' + code + ' ' + res.getContentText());
  }
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Запустіть цю функцію вручну один раз (Run → testTelegram) одразу після
 * того, як заповните BOT_TOKEN і CHAT_ID у Script Properties — щоб
 * перевірити, що бот реально може написати у ваш чат, ще до підключення
 * сайту.
 */
function testTelegram() {
  var props = PropertiesService.getScriptProperties();
  sendTelegramMessage(
    props.getProperty('BOT_TOKEN'),
    props.getProperty('CHAT_ID'),
    'Тест',
    '+380000000000',
    'ручний тест зі скрипта'
  );
}
