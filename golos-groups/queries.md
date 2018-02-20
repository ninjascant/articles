### PSK
Запрос для сбора списка постов, вошедших в программу ПСК:

```sql
SELECT author, permlink, created, total_payout_value, json_metadata FROM Comments
WHERE created > '2018-01-29 00:00:00' AND created < '2018-02-05 00:00:00'
AND parent_author = ''
AND author NOT IN ('technoskazki', 'golosmedia', 'econmag', 'befinfo', 'psk', 'izbrannoe', 'promo', 'sportbiz')
AND (active_votes LIKE '%"val"%' OR active_votes LIKE '%"creat0r"%') 
AND (active_votes NOT LIKE '%"litvintech"%' AND active_votes NOT LIKE '%"vitaly-lvov"%')
AND json_metadata LIKE '%"psk"%'
```

Критерий отбора: пост попадает в категорию ПСК в тому случае, если он имеет тег psk и за него проголосовали киты val или creat0r, и при этом за него **не** голосовали 
litvintech или vitaly-lvov. Последнее условие введено для того, чтобы отличить голоса creat0r от флагов, проставленных в составе Робин-гуда.
Еще одно условие - автор поста не должен входить в список аккаунтов Голосмедиа

### Vox-populi
Запрос для списка постов сообществ Вокс-попули
```sql
SELECT author, permlink, created, total_payout_value FROM Comments
WHERE created > '2018-01-29 00:00:00' AND created < '2018-02-05 00:00:00'
AND parent_author = ''
AND author IN ('vp-cryptorostov','vp-golos-brand', 'rblogger', 'vp-papamama', 'vox.mens', 'istfak', 'vp-minsk', 'vp-golos-tv', 'vp-liganovi4kov', 'vp-webdev', 'vp-pravogolosa', 'vp-bodyform', 'recenzent', 'just-life', 'vp-zarubezhje', 'vp-kulinar-club', 'vp-pedsovet', 'vp-womens-nature', 'vpodessa', 'vp-actionlife', 'vp-handmade', 'vp-photo.pro', 'cyberanalytics', 'vp-magic-india', 'vp-golos-est', 'vp-painting', 'poesie', 'my-vox-video', 'bizvoice', 'fractal', 'more-tsvetov', 'vp-postroi-ka', 'vp-siberiada', 'ekomir', 'vp-svoj-dom', 'vp-golos-radio', 'vp-freelance', 'vp-health-club')
AND (active_votes NOT LIKE '%"val"%')
```

Критерий отбора: автор поста должен входить в список сообществ. Еще одно условие - в списке проголосовавших не должно быть val, так как 
такие посты относим к ПСК

### Golosmedia
Запрос для сбора списков постов, относящихся к проекту Голосмедиа:
```sql
SELECT author, permlink, created, total_payout_value FROM Comments
WHERE created > '2018-01-29 00:00:00' AND created < '2018-02-05 00:00:00'
AND parent_author = ''
AND author IN ('technoskazki', 'golosmedia', 'econmag', 'befinfo', 'psk', 'izbrannoe', 'promo', 'sportbiz')
```

Критерий отбора: автор поста должен входить в список аккаунтов Голосмедиа

### Апвот 50/50
Запрос для сбора списка постов, участвующих в программе апвот 50/50 или апвот-100:
```sql
SELECT author, permlink, created, total_payout_value FROM Comments
WHERE created > '2018-01-29 00:00:00' AND created < '2018-02-05 00:00:00'
AND parent_author = ''
AND (json_metadata LIKE '%"ru--apvot50-50"%' OR json_metadata LIKE '%ru--apvot100%')
AND (active_votes NOT LIKE '%"val"%')
```

Критерий отбра: пост должен иметь тег `ru--apvot50-50` или `ru--apvot100`, а в списке голосующих не должен присутствовать val

### Независимые авторы
В эту группу попадают посты, не вошедшие ни в одну из выше обозначенных категорий
