using StruCal.Shared.Extensions;
using System;
using System.Runtime.Serialization;
using System.Xml.Serialization;

namespace BasicVector
{
    /// <summary>
    /// Provides the vector class that is the basis for this project.
    /// </summary>
    public struct Vector :IEquatable<Vector>
    {
        public readonly static Vector Zero = new Vector(0, 0);

        public readonly static Vector One = new Vector(1, 1);

        public readonly static Vector UnitX = new Vector(1, 0);

        public readonly static Vector UnitY = new Vector(0, 1);

        public double X { get; private set; }

        public double Y { get; private set; }

        public double Length
        {
            get
            {
                return Math.Sqrt(SquaredLength);
            }
        }

        public double SquaredLength
        {
            get
            {
                return X * X + Y * Y;
            }
        }

        public double Angle
        {
            get
            {
                return Math.Atan2(Y, X);
            }
        }

        public Vector(double xValue, double yValue)
            : this()
        {
            X = xValue;
            Y = yValue;
        }

        public override readonly bool Equals(object obj)
        {
            return obj is Vector && Equals((Vector)obj);
        }

        public readonly bool Equals(Vector other)
        {
            return X.IsApproximatelyEqualTo(other.X) && Y.IsApproximatelyEqualTo(other.Y);
        }

        public override int GetHashCode()
        {
            return X.GetHashCode() ^ Y.GetHashCode();
        }

        public override string ToString()
        {
            return "(" + X + ", " + Y + ")";
        }


        public static bool operator ==(Vector v1, Vector v2)
        {
            if (object.ReferenceEquals(v1, null))
            {
                return object.ReferenceEquals(v2, null);
            }
            return v1.Equals(v2);
        }

        public static bool operator !=(Vector v1, Vector v2)
        {
            return !(v1 == v2);
        }

        public static Vector operator +(Vector a, Vector b)
        {
            return new Vector(a.X + b.X, a.Y + b.Y);
        }

        public static Vector operator -(Vector a, Vector b)
        {
            return new Vector(a.X - b.X, a.Y - b.Y);
        }

        public static Vector operator *(Vector a, Vector b)
        {
            return new Vector(a.X * b.X, a.Y * b.Y);
        }

        public static Vector operator *(Vector a, double b)
        {
            return new Vector(a.X * b, a.Y * b);
        }

        public static Vector operator *(double a, Vector b)
        {
            return new Vector(b.X * a, b.Y * a);
        }

        public static Vector operator /(Vector a, Vector b)
        {
            return new Vector(a.X / b.X, a.Y / b.Y);
        }

        public static Vector operator /(Vector a, double b)
        {
            return new Vector(a.X / b, a.Y / b);
        }

        public static Vector operator -(Vector a)
        {
            return new Vector(-a.X, -a.Y);
        }
    }
}