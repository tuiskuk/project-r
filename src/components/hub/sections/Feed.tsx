"use client";

export function Feed() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Syöte</h3>
      <div className="space-y-3">
        <article className="p-4 rounded-lg border bg-white">
          <div className="text-sm text-gray-500">@matti • 2 h</div>
          <p className="mt-2">Rukoillaan tänään illalla kaupungin puolesta. 🙏</p>
        </article>

        <article className="p-4 rounded-lg border bg-white">
          <div className="text-sm text-gray-500">@veera • 6 h</div>
          <p className="mt-2">Kuka tulee raamattupiiriin ensi viikolla?</p>
        </article>
      </div>
    </section>
  );
}
