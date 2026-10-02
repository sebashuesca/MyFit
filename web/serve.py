#!/usr/bin/env python3
"""Sirve la landing MyFit desde este directorio para previsualizarla."""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Previsualiza la landing MyFit")
    parser.add_argument("--host", default="127.0.0.1", help="Interfaz de escucha")
    parser.add_argument("--port", type=int, default=8000, help="Puerto HTTP")
    args = parser.parse_args()

    web_dir = Path(__file__).resolve().parent
    handler = partial(SimpleHTTPRequestHandler, directory=str(web_dir))
    server = ThreadingHTTPServer((args.host, args.port), handler)
    print(f"MyFit disponible en http://{args.host}:{args.port}/", flush=True)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
