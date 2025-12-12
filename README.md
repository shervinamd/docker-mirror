# راه اندازی میرور شخصی با ورکر های کلاودفلر

درود بر شما
حتما در هنگام نصب اولیه داکر با مشکلاتی نظیر تحریم از سمت سرور های داکر و در صورت استفاده از سرویس های تحریم شکن ، با سرعت بسیار پایین و ناپایداری ارتباط با سرور های پروکسی این سرویس ها مواجه شدین

با استفاده از این پروژه میتونید به سادگی با راه اندازی یک ورکر در کلاودفلر و تنظیم اون به عنوان میرور در لیست ریپازیتوری های سیستم خودتون ، پکیج های داکر رو به این واسطه از سرور های داکر دریافت کنید

> [!WARNING]
> توجه داشته باشید که راه اندازی وی پی ان و هرگونه پروکسی بر بستر کلاودفلر خلاف سیاست های استفاده از کلاودفلر هست
> لطفا در هنگام استفاده به این مسئله توجه داشته باشید و این سرویس رو روی اکانت های اصلی خود راه اندازی نکنید

بنابراین به جای استفاده از سرور های اصلی در این دستورات:

```shell
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
# و یا دستور
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

از میرور جایگزین استفاده کنید:

```shell
sudo curl -fsSL https://YOUR_WORKER.workers.dev/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
# و همچنین میرور جایگزین در
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://YOUR_WORKER.workers.dev/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

> [!NOTE]
> این پروژه به کمک LLM نوشته شده و اگر ایده ای برای بهبود اش دارین لطفا دریغ نکنید :)