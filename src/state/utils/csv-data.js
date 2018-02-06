const csvData = `1,Matthew Webb,Thu 2016-12-29,AM,P
1,Matthew Webb,Thu 2016-12-29,PM,P
1,Matthew Webb,Fri 2016-12-30,AM,P
1,Matthew Webb,Fri 2016-12-30,PM,P
1,Matthew Webb,Thu 2017-01-05,AM,P
1,Matthew Webb,Thu 2017-01-05,PM,P
1,Matthew Webb,Fri 2017-04-07,AM,P
1,Matthew Webb,Mon 2017-04-10,PM,P
1,Matthew Webb,Mon 2017-04-10,AM,P
1,Matthew Webb,Mon 2017-05-08,PM,P
1,Matthew Webb,Mon 2017-05-08,AM,P
1,Matthew Webb,Mon 2017-05-29,PM,P
1,Matthew Webb,Mon 2017-05-29,AM,P
1,Matthew Webb,Mon 2017-09-04,PM,P
1,Matthew Webb,Mon 2017-09-04,AM,P
1,Matthew Webb,Fri 2017-12-29,PM,P
1,Matthew Webb,Fri 2017-12-29,AM,P
1,Matthew Webb,Mon 2018-01-01,PM,P
1,Matthew Webb,Mon 2018-01-01,AM,P
2,Thomas William Burgess,Thu 2016-12-29,AM,P
2,Thomas William Burgess,Thu 2016-12-29,PM,P
2,Thomas William Burgess,Fri 2016-12-30,AM,P
2,Thomas William Burgess,Fri 2016-12-30,PM,P
2,Thomas William Burgess,Thu 2017-01-05,AM,P
2,Thomas William Burgess,Thu 2017-01-05,PM,P
2,Thomas William Burgess,Fri 2017-04-07,AM,P
2,Thomas William Burgess,Mon 2017-04-10,PM,P
2,Thomas William Burgess,Mon 2017-04-10,AM,P
2,Thomas William Burgess,Mon 2017-05-08,PM,P
2,Thomas William Burgess,Mon 2017-05-08,AM,P
2,Thomas William Burgess,Mon 2017-05-29,PM,P
2,Thomas William Burgess,Mon 2017-05-29,AM,P
2,Thomas William Burgess,Mon 2017-09-04,PM,P
2,Thomas William Burgess,Mon 2017-09-04,AM,P
2,Thomas William Burgess,Fri 2017-12-29,PM,P
2,Thomas William Burgess,Fri 2017-12-29,AM,P
2,Thomas William Burgess,Mon 2018-01-01,PM,P
2,Thomas William Burgess,Mon 2018-01-01,AM,P
3,Henry Sullivan,Thu 2016-12-29,AM,P
3,Henry Sullivan,Thu 2016-12-29,PM,P
3,Henry Sullivan,Fri 2016-12-30,AM,P
3,Henry Sullivan,Fri 2016-12-30,PM,P
3,Henry Sullivan,Thu 2017-01-05,AM,P
3,Henry Sullivan,Thu 2017-01-05,PM,P
3,Henry Sullivan,Fri 2017-04-07,AM,P
3,Henry Sullivan,Mon 2017-04-10,PM,P
3,Henry Sullivan,Mon 2017-04-10,AM,P
3,Henry Sullivan,Mon 2017-05-08,PM,P
3,Henry Sullivan,Mon 2017-05-08,AM,P
3,Henry Sullivan,Mon 2017-05-29,PM,P
3,Henry Sullivan,Mon 2017-05-29,AM,P
3,Henry Sullivan,Mon 2017-09-04,PM,P
3,Henry Sullivan,Mon 2017-09-04,AM,P
3,Henry Sullivan,Fri 2017-12-29,PM,P
3,Henry Sullivan,Fri 2017-12-29,AM,P
3,Henry Sullivan,Mon 2018-01-01,PM,P
3,Henry Sullivan,Mon 2018-01-01,AM,P
4,Enrique Tirabocchi,Thu 2016-12-29,AM,P
4,Enrique Tirabocchi,Thu 2016-12-29,PM,P
4,Enrique Tirabocchi,Fri 2016-12-30,AM,P
4,Enrique Tirabocchi,Fri 2016-12-30,PM,P
4,Enrique Tirabocchi,Thu 2017-01-05,AM,P
4,Enrique Tirabocchi,Thu 2017-01-05,PM,P
4,Enrique Tirabocchi,Fri 2017-04-07,AM,P
4,Enrique Tirabocchi,Mon 2017-04-10,PM,P
4,Enrique Tirabocchi,Mon 2017-04-10,AM,P
4,Enrique Tirabocchi,Mon 2017-05-08,PM,P
4,Enrique Tirabocchi,Mon 2017-05-08,AM,P
4,Enrique Tirabocchi,Mon 2017-05-29,PM,P
4,Enrique Tirabocchi,Mon 2017-05-29,AM,P
4,Enrique Tirabocchi,Mon 2017-09-04,PM,P
4,Enrique Tirabocchi,Mon 2017-09-04,AM,P
4,Enrique Tirabocchi,Fri 2017-12-29,PM,P
4,Enrique Tirabocchi,Fri 2017-12-29,AM,P
4,Enrique Tirabocchi,Mon 2018-01-01,PM,P
4,Enrique Tirabocchi,Mon 2018-01-01,AM,P
5,Charles Toth,Thu 2016-12-29,AM,P
5,Charles Toth,Thu 2016-12-29,PM,P
5,Charles Toth,Fri 2016-12-30,AM,P
5,Charles Toth,Fri 2016-12-30,PM,P
5,Charles Toth,Thu 2017-01-05,AM,P
5,Charles Toth,Thu 2017-01-05,PM,P
5,Charles Toth,Fri 2017-04-07,AM,P
5,Charles Toth,Mon 2017-04-10,PM,P
5,Charles Toth,Mon 2017-04-10,AM,P
5,Charles Toth,Mon 2017-05-08,PM,P
5,Charles Toth,Mon 2017-05-08,AM,P
5,Charles Toth,Mon 2017-05-29,PM,P
5,Charles Toth,Mon 2017-05-29,AM,P
5,Charles Toth,Mon 2017-09-04,PM,P
5,Charles Toth,Mon 2017-09-04,AM,P
5,Charles Toth,Fri 2017-12-29,PM,P
5,Charles Toth,Fri 2017-12-29,AM,P
5,Charles Toth,Mon 2018-01-01,PM,P
5,Charles Toth,Mon 2018-01-01,AM,P
6,Gertrude Ederle,Thu 2016-12-29,AM,P
6,Gertrude Ederle,Thu 2016-12-29,PM,P
6,Gertrude Ederle,Fri 2016-12-30,AM,P
6,Gertrude Ederle,Fri 2016-12-30,PM,P
6,Gertrude Ederle,Thu 2017-01-05,AM,P
6,Gertrude Ederle,Thu 2017-01-05,PM,P
6,Gertrude Ederle,Fri 2017-04-07,AM,P
6,Gertrude Ederle,Mon 2017-04-10,PM,P
6,Gertrude Ederle,Mon 2017-04-10,AM,P
6,Gertrude Ederle,Mon 2017-05-08,PM,P
6,Gertrude Ederle,Mon 2017-05-08,AM,P
6,Gertrude Ederle,Mon 2017-05-29,PM,P
6,Gertrude Ederle,Mon 2017-05-29,AM,P
6,Gertrude Ederle,Mon 2017-09-04,PM,P
6,Gertrude Ederle,Mon 2017-09-04,AM,P
6,Gertrude Ederle,Fri 2017-12-29,PM,P
6,Gertrude Ederle,Fri 2017-12-29,AM,P
6,Gertrude Ederle,Mon 2018-01-01,PM,P
6,Gertrude Ederle,Mon 2018-01-01,AM,P
7,Amelia Gade Corson,Thu 2016-12-29,AM,P
7,Amelia Gade Corson,Thu 2016-12-29,PM,P
7,Amelia Gade Corson,Fri 2016-12-30,AM,P
7,Amelia Gade Corson,Fri 2016-12-30,PM,P
7,Amelia Gade Corson,Thu 2017-01-05,AM,P
7,Amelia Gade Corson,Thu 2017-01-05,PM,P
7,Amelia Gade Corson,Fri 2017-04-07,AM,P
7,Amelia Gade Corson,Mon 2017-04-10,PM,P
7,Amelia Gade Corson,Mon 2017-04-10,AM,P
7,Amelia Gade Corson,Mon 2017-05-08,PM,P
7,Amelia Gade Corson,Mon 2017-05-08,AM,P
7,Amelia Gade Corson,Mon 2017-05-29,PM,P
7,Amelia Gade Corson,Mon 2017-05-29,AM,P
7,Amelia Gade Corson,Mon 2017-09-04,PM,P
7,Amelia Gade Corson,Mon 2017-09-04,AM,P
7,Amelia Gade Corson,Fri 2017-12-29,PM,P
7,Amelia Gade Corson,Fri 2017-12-29,AM,P
7,Amelia Gade Corson,Mon 2018-01-01,PM,P
7,Amelia Gade Corson,Mon 2018-01-01,AM,P
8,Edward H. Temme,Thu 2016-12-29,AM,P
8,Edward H. Temme,Thu 2016-12-29,PM,P
8,Edward H. Temme,Fri 2016-12-30,AM,P
8,Edward H. Temme,Fri 2016-12-30,PM,P
8,Edward H. Temme,Thu 2017-01-05,AM,P
8,Edward H. Temme,Thu 2017-01-05,PM,P
8,Edward H. Temme,Fri 2017-04-07,AM,P
8,Edward H. Temme,Mon 2017-04-10,PM,P
8,Edward H. Temme,Mon 2017-04-10,AM,P
8,Edward H. Temme,Mon 2017-05-08,PM,P
8,Edward H. Temme,Mon 2017-05-08,AM,P
8,Edward H. Temme,Mon 2017-05-29,PM,P
8,Edward H. Temme,Mon 2017-05-29,AM,P
8,Edward H. Temme,Mon 2017-09-04,PM,P
8,Edward H. Temme,Mon 2017-09-04,AM,P
8,Edward H. Temme,Fri 2017-12-29,PM,P
8,Edward H. Temme,Fri 2017-12-29,AM,P
8,Edward H. Temme,Mon 2018-01-01,PM,P
8,Edward H. Temme,Mon 2018-01-01,AM,P
9,Florence Chadwick,Thu 2016-12-29,AM,P
9,Florence Chadwick,Thu 2016-12-29,PM,P
9,Florence Chadwick,Fri 2016-12-30,AM,P
9,Florence Chadwick,Fri 2016-12-30,PM,P
9,Florence Chadwick,Thu 2017-01-05,AM,P
9,Florence Chadwick,Thu 2017-01-05,PM,P
9,Florence Chadwick,Fri 2017-04-07,AM,P
9,Florence Chadwick,Mon 2017-04-10,PM,P
9,Florence Chadwick,Mon 2017-04-10,AM,P
9,Florence Chadwick,Mon 2017-05-08,PM,P
9,Florence Chadwick,Mon 2017-05-08,AM,P
9,Florence Chadwick,Mon 2017-05-29,PM,P
9,Florence Chadwick,Mon 2017-05-29,AM,P
9,Florence Chadwick,Mon 2017-09-04,PM,P
9,Florence Chadwick,Mon 2017-09-04,AM,P
9,Florence Chadwick,Fri 2017-12-29,PM,P
9,Florence Chadwick,Fri 2017-12-29,AM,P
9,Florence Chadwick,Mon 2018-01-01,PM,P
9,Florence Chadwick,Mon 2018-01-01,AM,P
10,Damian Piz  Beltran,Thu 2016-12-29,AM,P
10,Damian Piz  Beltran,Thu 2016-12-29,PM,P
10,Damian Piz  Beltran,Fri 2016-12-30,AM,P
10,Damian Piz  Beltran,Fri 2016-12-30,PM,P
10,Damian Piz  Beltran,Thu 2017-01-05,AM,P
10,Damian Piz  Beltran,Thu 2017-01-05,PM,P
10,Damian Piz  Beltran,Fri 2017-04-07,AM,P
10,Damian Piz  Beltran,Mon 2017-04-10,PM,P
10,Damian Piz  Beltran,Mon 2017-04-10,AM,P
10,Damian Piz  Beltran,Mon 2017-05-08,PM,P
10,Damian Piz  Beltran,Mon 2017-05-08,AM,P
10,Damian Piz  Beltran,Mon 2017-05-29,PM,P
10,Damian Piz  Beltran,Mon 2017-05-29,AM,P
10,Damian Piz  Beltran,Mon 2017-09-04,PM,P
10,Damian Piz  Beltran,Mon 2017-09-04,AM,P
10,Damian Piz  Beltran,Fri 2017-12-29,PM,P
10,Damian Piz  Beltran,Fri 2017-12-29,AM,P
10,Damian Piz  Beltran,Mon 2018-01-01,PM,P
10,Damian Piz  Beltran,Mon 2018-01-01,AM,P
11,Marilyn Bell,Thu 2016-12-29,AM,P
11,Marilyn Bell,Thu 2016-12-29,PM,P
11,Marilyn Bell,Fri 2016-12-30,AM,P
11,Marilyn Bell,Fri 2016-12-30,PM,P
11,Marilyn Bell,Thu 2017-01-05,AM,P
11,Marilyn Bell,Thu 2017-01-05,PM,P
11,Marilyn Bell,Fri 2017-04-07,AM,P
11,Marilyn Bell,Mon 2017-04-10,PM,P
11,Marilyn Bell,Mon 2017-04-10,AM,P
11,Marilyn Bell,Mon 2017-05-08,PM,P
11,Marilyn Bell,Mon 2017-05-08,AM,P
11,Marilyn Bell,Mon 2017-05-29,PM,P
11,Marilyn Bell,Mon 2017-05-29,AM,P
11,Marilyn Bell,Mon 2017-09-04,PM,P
11,Marilyn Bell,Mon 2017-09-04,AM,P
11,Marilyn Bell,Fri 2017-12-29,PM,P
11,Marilyn Bell,Fri 2017-12-29,AM,P
11,Marilyn Bell,Mon 2018-01-01,PM,P
11,Marilyn Bell,Mon 2018-01-01,AM,P
12,Brojen Das,Thu 2016-12-29,AM,P
12,Brojen Das,Thu 2016-12-29,PM,P
12,Brojen Das,Fri 2016-12-30,AM,P
12,Brojen Das,Fri 2016-12-30,PM,P
12,Brojen Das,Thu 2017-01-05,AM,P
12,Brojen Das,Thu 2017-01-05,PM,P
12,Brojen Das,Fri 2017-04-07,AM,P
12,Brojen Das,Mon 2017-04-10,PM,P
12,Brojen Das,Mon 2017-04-10,AM,P
12,Brojen Das,Mon 2017-05-08,PM,P
12,Brojen Das,Mon 2017-05-08,AM,P
12,Brojen Das,Mon 2017-05-29,PM,P
12,Brojen Das,Mon 2017-05-29,AM,P
12,Brojen Das,Mon 2017-09-04,PM,P
12,Brojen Das,Mon 2017-09-04,AM,P
12,Brojen Das,Fri 2017-12-29,PM,P
12,Brojen Das,Fri 2017-12-29,AM,P
12,Brojen Das,Mon 2018-01-01,PM,P
12,Brojen Das,Mon 2018-01-01,AM,P
13,Arati Saha,Thu 2016-12-29,AM,P
13,Arati Saha,Thu 2016-12-29,PM,P
13,Arati Saha,Fri 2016-12-30,AM,P
13,Arati Saha,Fri 2016-12-30,PM,P
13,Arati Saha,Thu 2017-01-05,AM,P
13,Arati Saha,Thu 2017-01-05,PM,P
13,Arati Saha,Fri 2017-04-07,AM,P
13,Arati Saha,Mon 2017-04-10,PM,P
13,Arati Saha,Mon 2017-04-10,AM,P
13,Arati Saha,Mon 2017-05-08,PM,P
13,Arati Saha,Mon 2017-05-08,AM,P
13,Arati Saha,Mon 2017-05-29,PM,P
13,Arati Saha,Mon 2017-05-29,AM,P
13,Arati Saha,Mon 2017-09-04,PM,P
13,Arati Saha,Mon 2017-09-04,AM,P
13,Arati Saha,Fri 2017-12-29,PM,P
13,Arati Saha,Fri 2017-12-29,AM,P
13,Arati Saha,Mon 2018-01-01,PM,P
13,Arati Saha,Mon 2018-01-01,AM,P
14,Mihir Sen,Thu 2016-12-29,AM,P
14,Mihir Sen,Thu 2016-12-29,PM,P
14,Mihir Sen,Fri 2016-12-30,AM,P
14,Mihir Sen,Fri 2016-12-30,PM,P
14,Mihir Sen,Thu 2017-01-05,AM,P
14,Mihir Sen,Thu 2017-01-05,PM,P
14,Mihir Sen,Fri 2017-04-07,AM,P
14,Mihir Sen,Mon 2017-04-10,PM,P
14,Mihir Sen,Mon 2017-04-10,AM,P
14,Mihir Sen,Mon 2017-05-08,PM,P
14,Mihir Sen,Mon 2017-05-08,AM,P
14,Mihir Sen,Mon 2017-05-29,PM,P
14,Mihir Sen,Mon 2017-05-29,AM,P
14,Mihir Sen,Mon 2017-09-04,PM,P
14,Mihir Sen,Mon 2017-09-04,AM,P
14,Mihir Sen,Fri 2017-12-29,PM,P
14,Mihir Sen,Fri 2017-12-29,AM,P
14,Mihir Sen,Mon 2018-01-01,PM,P
14,Mihir Sen,Mon 2018-01-01,AM,P
15,Antonio Abertondo,Thu 2016-12-29,AM,P
15,Antonio Abertondo,Thu 2016-12-29,PM,P
15,Antonio Abertondo,Fri 2016-12-30,AM,P
15,Antonio Abertondo,Fri 2016-12-30,PM,P
15,Antonio Abertondo,Thu 2017-01-05,AM,P
15,Antonio Abertondo,Thu 2017-01-05,PM,P
15,Antonio Abertondo,Fri 2017-04-07,AM,P
15,Antonio Abertondo,Mon 2017-04-10,PM,P
15,Antonio Abertondo,Mon 2017-04-10,AM,P
15,Antonio Abertondo,Mon 2017-05-08,PM,P
15,Antonio Abertondo,Mon 2017-05-08,AM,P
15,Antonio Abertondo,Mon 2017-05-29,PM,P
15,Antonio Abertondo,Mon 2017-05-29,AM,P
15,Antonio Abertondo,Mon 2017-09-04,PM,P
15,Antonio Abertondo,Mon 2017-09-04,AM,P
15,Antonio Abertondo,Fri 2017-12-29,PM,P
15,Antonio Abertondo,Fri 2017-12-29,AM,P
15,Antonio Abertondo,Mon 2018-01-01,PM,P
15,Antonio Abertondo,Mon 2018-01-01,AM,P
16,Jon Erikson,Thu 2016-12-29,AM,P
16,Jon Erikson,Thu 2016-12-29,PM,P
16,Jon Erikson,Fri 2016-12-30,AM,P
16,Jon Erikson,Fri 2016-12-30,PM,P
16,Jon Erikson,Thu 2017-01-05,AM,P
16,Jon Erikson,Thu 2017-01-05,PM,P
16,Jon Erikson,Fri 2017-04-07,AM,P
16,Jon Erikson,Mon 2017-04-10,PM,P
16,Jon Erikson,Mon 2017-04-10,AM,P
16,Jon Erikson,Mon 2017-05-08,PM,P
16,Jon Erikson,Mon 2017-05-08,AM,P
16,Jon Erikson,Mon 2017-05-29,PM,P
16,Jon Erikson,Mon 2017-05-29,AM,P
16,Jon Erikson,Mon 2017-09-04,PM,P
16,Jon Erikson,Mon 2017-09-04,AM,P
16,Jon Erikson,Fri 2017-12-29,PM,P
16,Jon Erikson,Fri 2017-12-29,AM,P
16,Jon Erikson,Mon 2018-01-01,PM,P
16,Jon Erikson,Mon 2018-01-01,AM,P
17,John Maclean,Thu 2016-12-29,AM,P
17,John Maclean,Thu 2016-12-29,PM,P
17,John Maclean,Fri 2016-12-30,AM,P
17,John Maclean,Fri 2016-12-30,PM,P
17,John Maclean,Thu 2017-01-05,AM,P
17,John Maclean,Thu 2017-01-05,PM,P
17,John Maclean,Fri 2017-04-07,AM,P
17,John Maclean,Mon 2017-04-10,PM,P
17,John Maclean,Mon 2017-04-10,AM,P
17,John Maclean,Mon 2017-05-08,PM,P
17,John Maclean,Mon 2017-05-08,AM,P
17,John Maclean,Mon 2017-05-29,PM,P
17,John Maclean,Mon 2017-05-29,AM,P
17,John Maclean,Mon 2017-09-04,PM,P
17,John Maclean,Mon 2017-09-04,AM,P
17,John Maclean,Fri 2017-12-29,PM,P
17,John Maclean,Fri 2017-12-29,AM,P
17,John Maclean,Mon 2018-01-01,PM,P
17,John Maclean,Mon 2018-01-01,AM,P
18,Philippe Croizon,Thu 2016-12-29,AM,P
18,Philippe Croizon,Thu 2016-12-29,PM,P
18,Philippe Croizon,Fri 2016-12-30,AM,P
18,Philippe Croizon,Fri 2016-12-30,PM,P
18,Philippe Croizon,Thu 2017-01-05,AM,P
18,Philippe Croizon,Thu 2017-01-05,PM,P
18,Philippe Croizon,Fri 2017-04-07,AM,P
18,Philippe Croizon,Mon 2017-04-10,PM,P
18,Philippe Croizon,Mon 2017-04-10,AM,P
18,Philippe Croizon,Mon 2017-05-08,PM,P
18,Philippe Croizon,Mon 2017-05-08,AM,P
18,Philippe Croizon,Mon 2017-05-29,PM,P
18,Philippe Croizon,Mon 2017-05-29,AM,P
18,Philippe Croizon,Mon 2017-09-04,PM,P
18,Philippe Croizon,Mon 2017-09-04,AM,P
18,Philippe Croizon,Fri 2017-12-29,PM,P
18,Philippe Croizon,Fri 2017-12-29,AM,P
18,Philippe Croizon,Mon 2018-01-01,PM,P
18,Philippe Croizon,Mon 2018-01-01,AM,P
19,Trent Grimsey,Thu 2016-12-29,AM,P
19,Trent Grimsey,Thu 2016-12-29,PM,P
19,Trent Grimsey,Fri 2016-12-30,AM,P
19,Trent Grimsey,Fri 2016-12-30,PM,P
19,Trent Grimsey,Thu 2017-01-05,AM,P
19,Trent Grimsey,Thu 2017-01-05,PM,P
19,Trent Grimsey,Fri 2017-04-07,AM,P
19,Trent Grimsey,Mon 2017-04-10,PM,P
19,Trent Grimsey,Mon 2017-04-10,AM,P
19,Trent Grimsey,Mon 2017-05-08,PM,P
19,Trent Grimsey,Mon 2017-05-08,AM,P
19,Trent Grimsey,Mon 2017-05-29,PM,P
19,Trent Grimsey,Mon 2017-05-29,AM,P
19,Trent Grimsey,Mon 2017-09-04,PM,P
19,Trent Grimsey,Mon 2017-09-04,AM,P
19,Trent Grimsey,Fri 2017-12-29,PM,P
19,Trent Grimsey,Fri 2017-12-29,AM,P
19,Trent Grimsey,Mon 2018-01-01,PM,P
19,Trent Grimsey,Mon 2018-01-01,AM,P
20,Philip Rush,Thu 2016-12-29,AM,P
20,Philip Rush,Thu 2016-12-29,PM,P
20,Philip Rush,Fri 2016-12-30,AM,P
20,Philip Rush,Fri 2016-12-30,PM,P
20,Philip Rush,Thu 2017-01-05,AM,P
20,Philip Rush,Thu 2017-01-05,PM,P
20,Philip Rush,Fri 2017-04-07,AM,P
20,Philip Rush,Mon 2017-04-10,PM,P
20,Philip Rush,Mon 2017-04-10,AM,P
20,Philip Rush,Mon 2017-05-08,PM,P
20,Philip Rush,Mon 2017-05-08,AM,P
20,Philip Rush,Mon 2017-05-29,PM,P
20,Philip Rush,Mon 2017-05-29,AM,P
20,Philip Rush,Mon 2017-09-04,PM,P
20,Philip Rush,Mon 2017-09-04,AM,P
20,Philip Rush,Fri 2017-12-29,PM,P
20,Philip Rush,Fri 2017-12-29,AM,P
20,Philip Rush,Mon 2018-01-01,PM,P
20,Philip Rush,Mon 2018-01-01,AM,P
21,Kevin Murphy,Thu 2016-12-29,AM,P
21,Kevin Murphy,Thu 2016-12-29,PM,P
21,Kevin Murphy,Fri 2016-12-30,AM,P
21,Kevin Murphy,Fri 2016-12-30,PM,P
21,Kevin Murphy,Thu 2017-01-05,AM,P
21,Kevin Murphy,Thu 2017-01-05,PM,P
21,Kevin Murphy,Fri 2017-04-07,AM,P
21,Kevin Murphy,Mon 2017-04-10,PM,P
21,Kevin Murphy,Mon 2017-04-10,AM,P
21,Kevin Murphy,Mon 2017-05-08,PM,P
21,Kevin Murphy,Mon 2017-05-08,AM,P
21,Kevin Murphy,Mon 2017-05-29,PM,P
21,Kevin Murphy,Mon 2017-05-29,AM,P
21,Kevin Murphy,Mon 2017-09-04,PM,P
21,Kevin Murphy,Mon 2017-09-04,AM,P
21,Kevin Murphy,Fri 2017-12-29,PM,P
21,Kevin Murphy,Fri 2017-12-29,AM,P
21,Kevin Murphy,Mon 2018-01-01,PM,P
21,Kevin Murphy,Mon 2018-01-01,AM,P
22,Alison Streeter,Thu 2016-12-29,AM,P
22,Alison Streeter,Thu 2016-12-29,PM,P
22,Alison Streeter,Fri 2016-12-30,AM,P
22,Alison Streeter,Fri 2016-12-30,PM,P
22,Alison Streeter,Thu 2017-01-05,AM,P
22,Alison Streeter,Thu 2017-01-05,PM,P
22,Alison Streeter,Fri 2017-04-07,AM,P
22,Alison Streeter,Mon 2017-04-10,PM,P
22,Alison Streeter,Mon 2017-04-10,AM,P
22,Alison Streeter,Mon 2017-05-08,PM,P
22,Alison Streeter,Mon 2017-05-08,AM,P
22,Alison Streeter,Mon 2017-05-29,PM,P
22,Alison Streeter,Mon 2017-05-29,AM,P
22,Alison Streeter,Mon 2017-09-04,PM,P
22,Alison Streeter,Mon 2017-09-04,AM,P
22,Alison Streeter,Fri 2017-12-29,PM,P
22,Alison Streeter,Fri 2017-12-29,AM,P
22,Alison Streeter,Mon 2018-01-01,PM,P
22,Alison Streeter,Mon 2018-01-01,AM,P
23,Cynthia Nicholas,Thu 2016-12-29,AM,P
23,Cynthia Nicholas,Thu 2016-12-29,PM,P
23,Cynthia Nicholas,Fri 2016-12-30,AM,P
23,Cynthia Nicholas,Fri 2016-12-30,PM,P
23,Cynthia Nicholas,Thu 2017-01-05,AM,P
23,Cynthia Nicholas,Thu 2017-01-05,PM,P
23,Cynthia Nicholas,Fri 2017-04-07,AM,P
23,Cynthia Nicholas,Mon 2017-04-10,PM,P
23,Cynthia Nicholas,Mon 2017-04-10,AM,P
23,Cynthia Nicholas,Mon 2017-05-08,PM,P
23,Cynthia Nicholas,Mon 2017-05-08,AM,P
23,Cynthia Nicholas,Mon 2017-05-29,PM,P
23,Cynthia Nicholas,Mon 2017-05-29,AM,P
23,Cynthia Nicholas,Mon 2017-09-04,PM,P
23,Cynthia Nicholas,Mon 2017-09-04,AM,P
23,Cynthia Nicholas,Fri 2017-12-29,PM,P
23,Cynthia Nicholas,Fri 2017-12-29,AM,P
23,Cynthia Nicholas,Mon 2018-01-01,PM,P
23,Cynthia Nicholas,Mon 2018-01-01,AM,P
1,Matthew Webb,Mon 2016-10-10,AM,V
1,Matthew Webb,Mon 2016-10-10,PM,V
1,Matthew Webb,Tue 2016-10-11,AM,V
1,Matthew Webb,Tue 2016-10-11,PM,V
1,Matthew Webb,Wed 2016-10-12,AM,V
1,Matthew Webb,Wed 2016-10-12,PM,V
1,Matthew Webb,Thu 2016-10-13,AM,V
1,Matthew Webb,Thu 2016-10-13,PM,V
1,Matthew Webb,Fri 2016-10-14,AM,V
1,Matthew Webb,Fri 2016-10-14,PM,V
1,Matthew Webb,Thu 2016-11-24,AM,V
1,Matthew Webb,Thu 2016-11-24,PM,V
1,Matthew Webb,Fri 2016-11-25,AM,V
1,Matthew Webb,Fri 2016-11-25,PM,V
1,Matthew Webb,Mon 2016-10-24,AM,T
2,Thomas William Burgess,Mon 2016-12-26,AM,V
2,Thomas William Burgess,Mon 2016-12-26,PM,V
2,Thomas William Burgess,Tue 2016-12-27,AM,V
2,Thomas William Burgess,Tue 2016-12-27,PM,V
2,Thomas William Burgess,Wed 2016-12-28,AM,V
2,Thomas William Burgess,Wed 2016-12-28,PM,V
3,Henry Sullivan,Mon 2016-12-26,AM,V
3,Henry Sullivan,Mon 2016-12-26,PM,V
3,Henry Sullivan,Tue 2016-12-27,AM,V
3,Henry Sullivan,Tue 2016-12-27,PM,V
3,Henry Sullivan,Wed 2016-12-28,AM,V
3,Henry Sullivan,Wed 2016-12-28,PM,V
4,Enrique Tirabocchi,Mon 2016-12-26,AM,V
4,Enrique Tirabocchi,Mon 2016-12-26,PM,V
4,Enrique Tirabocchi,Tue 2016-12-27,AM,V
4,Enrique Tirabocchi,Tue 2016-12-27,PM,V
4,Enrique Tirabocchi,Wed 2016-12-28,AM,V
4,Enrique Tirabocchi,Wed 2016-12-28,PM,V
5,Charles Toth,Tue 2016-12-27,AM,V
5,Charles Toth,Tue 2016-12-27,PM,V
5,Charles Toth,Wed 2016-12-28,AM,V
5,Charles Toth,Wed 2016-12-28,PM,V
12,Brojen Das,Tue 2016-12-27,AM,V
12,Brojen Das,Tue 2016-12-27,PM,V
12,Brojen Das,Wed 2016-12-28,AM,V
12,Brojen Das,Wed 2016-12-28,PM,V
15,Antonio Abertondo,Tue 2016-12-27,AM,V
15,Antonio Abertondo,Tue 2016-12-27,PM,V
15,Antonio Abertondo,Wed 2016-12-28,AM,V
15,Antonio Abertondo,Wed 2016-12-28,PM,V
6,Gertrude Ederle,Mon 2016-10-31,AM,V
6,Gertrude Ederle,Mon 2016-10-31,PM,V
6,Gertrude Ederle,Tue 2016-11-01,AM,V
6,Gertrude Ederle,Tue 2016-11-01,PM,V
6,Gertrude Ederle,Wed 2016-11-02,AM,V
6,Gertrude Ederle,Wed 2016-11-02,PM,V
6,Gertrude Ederle,Thu 2016-11-03,AM,V
6,Gertrude Ederle,Thu 2016-11-03,PM,V
6,Gertrude Ederle,Fri 2016-11-04,AM,V
6,Gertrude Ederle,Fri 2016-11-04,PM,V
10,Damian Piz  Beltran,Mon 2016-10-31,AM,V
10,Damian Piz  Beltran,Mon 2016-10-31,PM,V
10,Damian Piz  Beltran,Tue 2016-11-01,AM,V
10,Damian Piz  Beltran,Tue 2016-11-01,PM,V
10,Damian Piz  Beltran,Wed 2016-11-02,AM,V
10,Damian Piz  Beltran,Wed 2016-11-02,PM,V
10,Damian Piz  Beltran,Thu 2016-11-03,AM,V
10,Damian Piz  Beltran,Thu 2016-11-03,PM,V
10,Damian Piz  Beltran,Fri 2016-11-04,AM,V
10,Damian Piz  Beltran,Fri 2016-11-04,PM,V
18,Philippe Croizon,Mon 2016-10-31,AM,V
18,Philippe Croizon,Mon 2016-10-31,PM,V
18,Philippe Croizon,Tue 2016-11-01,AM,V
18,Philippe Croizon,Tue 2016-11-01,PM,V
18,Philippe Croizon,Wed 2016-11-02,AM,V
18,Philippe Croizon,Wed 2016-11-02,PM,V
18,Philippe Croizon,Thu 2016-11-03,AM,V
18,Philippe Croizon,Thu 2016-11-03,PM,V
18,Philippe Croizon,Fri 2016-11-04,AM,V
18,Philippe Croizon,Fri 2016-11-04,PM,V
20,Philip Rush,Mon 2016-10-31,AM,V
20,Philip Rush,Mon 2016-10-31,PM,V
20,Philip Rush,Tue 2016-11-01,AM,V
20,Philip Rush,Tue 2016-11-01,PM,V
20,Philip Rush,Wed 2016-11-02,AM,V
20,Philip Rush,Wed 2016-11-02,PM,V
20,Philip Rush,Thu 2016-11-03,AM,V
20,Philip Rush,Thu 2016-11-03,PM,V
20,Philip Rush,Fri 2016-11-04,AM,V
20,Philip Rush,Fri 2016-11-04,PM,V
1,Matthew Webb,Wed 2017-11-15,AM,T
1,Matthew Webb,Wed 2017-11-15,PM,T
2,Thomas William Burgess,Wed 2017-11-15,AM,T
2,Thomas William Burgess,Wed 2017-11-15,PM,T
3,Henry Sullivan,Wed 2017-11-15,AM,T
3,Henry Sullivan,Wed 2017-11-15,PM,T
4,Enrique Tirabocchi,Wed 2017-11-15,AM,T
4,Enrique Tirabocchi,Wed 2017-11-15,PM,T
9,Florence Chadwick,Wed 2017-11-15,AM,T
9,Florence Chadwick,Wed 2017-11-15,PM,T
10,Damian Piz  Beltran,Wed 2017-11-15,AM,T
10,Damian Piz  Beltran,Wed 2017-11-15,PM,T
11,Marilyn Bell,Wed 2017-11-15,AM,T
11,Marilyn Bell,Wed 2017-11-15,PM,T
13,Arati Saha,Wed 2017-11-15,AM,T
13,Arati Saha,Wed 2017-11-15,PM,T
14,Mihir Sen,Wed 2017-11-15,AM,T
14,Mihir Sen,Wed 2017-11-15,PM,T
18,Philippe Croizon,Wed 2017-11-15,AM,T
18,Philippe Croizon,Wed 2017-11-15,PM,T
20,Philip Rush,Wed 2017-11-15,AM,T
20,Philip Rush,Wed 2017-11-15,PM,T
23,Cynthia Nicholas,Wed 2017-11-15,AM,T
23,Cynthia Nicholas,Wed 2017-11-15,PM,T
23,Cynthia Nicholas,Mon 2016-10-31,AM,V
23,Cynthia Nicholas,Mon 2016-10-31,PM,V
23,Cynthia Nicholas,Tue 2016-11-01,AM,V
23,Cynthia Nicholas,Tue 2016-11-01,PM,V
23,Cynthia Nicholas,Wed 2016-11-02,AM,V
23,Cynthia Nicholas,Wed 2016-11-02,PM,V
23,Cynthia Nicholas,Thu 2016-11-03,AM,V
23,Cynthia Nicholas,Thu 2016-11-03,PM,V
17,John Maclean,Mon 2016-10-31,AM,V
17,John Maclean,Mon 2016-10-31,PM,V
17,John Maclean,Tue 2016-11-01,AM,V
17,John Maclean,Tue 2016-11-01,PM,V
17,John Maclean,Wed 2016-11-02,AM,V
17,John Maclean,Wed 2016-11-02,PM,V
5,Charles Toth,Mon 2017-02-06,AM,V
8,Edward H. Temme,Mon 2017-02-06,PM,V
8,Edward H. Temme,Tue 2017-02-07,AM,V
8,Edward H. Temme,Tue 2017-02-07,PM,V
8,Edward H. Temme,Wed 2017-02-08,AM,V
8,Edward H. Temme,Wed 2017-02-08,PM,V
8,Edward H. Temme,Thu 2017-02-09,AM,V
8,Edward H. Temme,Thu 2017-02-09,PM,V
8,Edward H. Temme,Fri 2017-02-10,AM,V
8,Edward H. Temme,Fri 2017-02-10,PM,V
8,Edward H. Temme,Mon 2017-02-13,AM,V
8,Edward H. Temme,Mon 2017-02-13,PM,V
8,Edward H. Temme,Tue 2017-02-14,AM,V
8,Edward H. Temme,Tue 2017-02-14,PM,V
8,Edward H. Temme,Wed 2017-02-15,AM,V
8,Edward H. Temme,Wed 2017-02-15,PM,V
8,Edward H. Temme,Thu 2017-02-16,AM,V
8,Edward H. Temme,Thu 2017-02-16,PM,V
8,Edward H. Temme,Fri 2017-02-17,AM,V
8,Edward H. Temme,Fri 2017-02-17,PM,V
1,Matthew Webb,Mon 2017-04-17,AM,V
1,Matthew Webb,Mon 2017-04-17,PM,V
1,Matthew Webb,Tue 2017-04-18,AM,V
1,Matthew Webb,Tue 2017-04-18,PM,V
1,Matthew Webb,Wed 2017-04-19,AM,V
1,Matthew Webb,Wed 2017-04-19,PM,V
1,Matthew Webb,Thu 2017-04-20,AM,V
1,Matthew Webb,Thu 2017-04-20,PM,V
1,Matthew Webb,Fri 2017-04-21,AM,V
1,Matthew Webb,Fri 2017-04-21,PM,V
13,Arati Saha,Mon 2016-12-26,AM,V
13,Arati Saha,Mon 2016-12-26,PM,V
13,Arati Saha,Tue 2016-12-27,AM,V
13,Arati Saha,Tue 2016-12-27,PM,V
13,Arati Saha,Wed 2016-12-28,AM,V
13,Arati Saha,Wed 2016-12-28,PM,V
14,Mihir Sen,Mon 2016-12-26,AM,V
14,Mihir Sen,Mon 2016-12-26,PM,V
14,Mihir Sen,Tue 2016-12-27,AM,V
14,Mihir Sen,Tue 2016-12-27,PM,V
14,Mihir Sen,Wed 2016-12-28,AM,V
14,Mihir Sen,Wed 2016-12-28,PM,V
15,Antonio Abertondo,Mon 2016-12-26,AM,V
15,Antonio Abertondo,Mon 2016-12-26,PM,V
15,Antonio Abertondo,Tue 2016-12-27,AM,V
15,Antonio Abertondo,Tue 2016-12-27,PM,V
15,Antonio Abertondo,Wed 2016-12-28,AM,V
15,Antonio Abertondo,Wed 2016-12-28,PM,V
16,Jon Erikson,Mon 2016-12-26,AM,V
16,Jon Erikson,Mon 2016-12-26,PM,V
16,Jon Erikson,Tue 2016-12-27,AM,V
16,Jon Erikson,Tue 2016-12-27,PM,V
16,Jon Erikson,Wed 2016-12-28,AM,V
16,Jon Erikson,Wed 2016-12-28,PM,V
17,John Maclean,Mon 2016-12-26,AM,V
17,John Maclean,Mon 2016-12-26,PM,V
17,John Maclean,Tue 2016-12-27,AM,V
17,John Maclean,Tue 2016-12-27,PM,V
17,John Maclean,Wed 2016-12-28,AM,V
17,John Maclean,Wed 2016-12-28,PM,V
17,John Maclean,Mon 2016-11-07,AM,T
17,John Maclean,Mon 2016-11-07,PM,T
21,Kevin Murphy,Mon 2016-11-07,AM,T
21,Kevin Murphy,Mon 2016-11-07,PM,T
22,Alison Streeter,Mon 2016-11-07,AM,T
22,Alison Streeter,Mon 2016-11-07,PM,T
4,Enrique Tirabocchi,Mon 2016-11-07,AM,T
4,Enrique Tirabocchi,Mon 2016-11-07,PM,T
11,Marilyn Bell,Mon 2016-10-31,AM,T
11,Marilyn Bell,Mon 2016-10-31,PM,T
11,Marilyn Bell,Tue 2016-11-01,AM,T
11,Marilyn Bell,Tue 2016-11-01,PM,T
11,Marilyn Bell,Wed 2016-11-02,AM,T
11,Marilyn Bell,Wed 2016-11-02,PM,T
11,Marilyn Bell,Thu 2016-11-03,AM,T
11,Marilyn Bell,Thu 2016-11-03,PM,T
11,Marilyn Bell,Fri 2016-11-04,AM,T
11,Marilyn Bell,Fri 2016-11-04,PM,T
11,Marilyn Bell,Mon 2016-11-07,AM,T
11,Marilyn Bell,Mon 2016-11-07,PM,T
11,Marilyn Bell,Tue 2016-11-08,AM,T
11,Marilyn Bell,Tue 2016-11-08,PM,T
11,Marilyn Bell,Wed 2016-11-09,AM,T
11,Marilyn Bell,Wed 2016-11-09,PM,T
11,Marilyn Bell,Thu 2016-11-10,AM,T
11,Marilyn Bell,Thu 2016-11-10,PM,T
11,Marilyn Bell,Fri 2016-11-11,AM,T
11,Marilyn Bell,Fri 2016-11-11,PM,T
11,Marilyn Bell,Mon 2016-11-14,AM,T
11,Marilyn Bell,Mon 2016-11-14,PM,T
11,Marilyn Bell,Tue 2016-11-15,AM,T
11,Marilyn Bell,Tue 2016-11-15,PM,T
11,Marilyn Bell,Wed 2016-11-16,AM,T
11,Marilyn Bell,Wed 2016-11-16,PM,T
11,Marilyn Bell,Thu 2016-11-17,AM,T
11,Marilyn Bell,Thu 2016-11-17,PM,T
11,Marilyn Bell,Fri 2016-11-18,AM,T
11,Marilyn Bell,Fri 2016-11-18,PM,T
11,Marilyn Bell,Mon 2016-11-21,AM,T
11,Marilyn Bell,Mon 2016-11-21,PM,T
11,Marilyn Bell,Tue 2016-11-22,AM,T
11,Marilyn Bell,Tue 2016-11-22,PM,T
11,Marilyn Bell,Wed 2016-11-23,AM,T
11,Marilyn Bell,Wed 2016-11-23,PM,T
11,Marilyn Bell,Thu 2016-11-24,AM,T
11,Marilyn Bell,Thu 2016-11-24,PM,T
11,Marilyn Bell,Fri 2016-11-25,AM,T
11,Marilyn Bell,Fri 2016-11-25,PM,T
11,Marilyn Bell,Mon 2016-11-28,AM,T
11,Marilyn Bell,Mon 2016-11-28,PM,T
11,Marilyn Bell,Tue 2016-11-29,AM,T
11,Marilyn Bell,Tue 2016-11-29,PM,T
11,Marilyn Bell,Wed 2016-11-30,AM,T
11,Marilyn Bell,Wed 2016-11-30,PM,T
11,Marilyn Bell,Thu 2016-12-01,AM,T
11,Marilyn Bell,Thu 2016-12-01,PM,T
11,Marilyn Bell,Fri 2016-12-02,AM,T
11,Marilyn Bell,Fri 2016-12-02,PM,T`;

export default csvData;
